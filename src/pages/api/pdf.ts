import type { NextApiRequest, NextApiResponse } from 'next';
import { PDFOptions } from 'puppeteer';
import { Promise as PromiseBluebird } from 'bluebird';
import hb from 'handlebars';
import chromium from 'chrome-aws-lambda';
import { quotationHtmlTemplate } from '@constants/htmlTemplate';

type CallBackType = (pdf: any) => void;

interface OptionsProps extends PDFOptions {
    args?: string[];
}

interface FileWithUrl {
    url: string;
    content?: never;
}

interface FileWithContent {
    url?: never;
    content: string;
}

type FileType = FileWithUrl | FileWithContent;

async function generatePdf(file: FileType, options?: OptionsProps, callback?: CallBackType) {
    const browser = await chromium.puppeteer.launch({
        args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();

    if (file.content) {
        const template = hb.compile(file.content, { strict: true });
        const result = template(file.content);
        const html = result;

        await page.setContent(html);
    } else {
        await page.goto(file.url as string, {
            waitUntil: 'networkidle0',
        });
    }

    return PromiseBluebird.props(page.pdf(options))
        .then(async (data) => {
            await browser.close();

            return Buffer.from(Object.values(data));
        })
        .asCallback(callback);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return new Promise<void>((resolve) => {
        if (req.method !== 'GET' || !req.query.title) {
            res.status(400).json({ message: 'Invalid request' });
            resolve();
            return;
        }
        const html = quotationHtmlTemplate({ title: req.query.title as string });

        generatePdf({ content: html }, { format: 'a4' })
            .then((pdfBuffer) => {
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename=${req.query.title}.pdf`);
                res.status(200).send(pdfBuffer);
                resolve();
            })
            .catch(() => {
                res.status(500).json({ message: 'Unexpected error happened' });
                resolve();
            });
    });
}
