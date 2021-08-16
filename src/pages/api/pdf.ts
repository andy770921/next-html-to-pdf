import type { NextApiRequest, NextApiResponse } from 'next';
import pdf from 'html-pdf-node-ts';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const html = `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QUOTATION PDF</title>
    <style>
      html,
      body {
        background-color: #fff;
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        max-width: 80vw;
        margin: 0 auto;
      }

      table,
      th,
      td {
        border-collapse: collapse;
        text-align: center;
      }

      p {
        margin: 0;
      }

      a {
        color: #3277c8;
        text-decoration-skip-ink: none;
        display: inline-block;
      }

      .logo {
        width: 300px;
        position: relative;
        left: -30px;
      }

      .title {
        font-family: TimesNewRoman, "Times New Roman", Times, Baskerville,
          Georgia, serif;
        font-size: 36px;
        font-weight: 700;
      }

      .billing-content {
        margin: auto;
        border: 1px solid;
        width: 100%;
      }

      .billing-content > tbody > tr:first-child {
        border: 1px solid;
      }

      .billing-content > tbody > tr > th {
        height: 25px;
      }

      .billing-content > tbody > tr > td {
        height: 30px;
      }

      .block {
        display: block;
      }

      .inline-block {
        display: inline-block;
      }

      .float-right {
        float: right;
      }

      .text-right {
        text-align: right;
      }

      .mt-1 {
        margin-top: 4px;
      }

      .mt-2 {
        margin-top: 8px;
      }

      .mt-3 {
        margin-top: 12px;
      }

      .mt-5 {
        margin-top: 20px;
      }
      .mt-15 {
        margin-top: 60px;
      }

      .mb-1 {
        margin-bottom: 4px;
      }

      .mb-2 {
        margin-bottom: 8px;
      }

      .mx-auto {
        margin: 0 auto;
      }

      .pos-relative {
        position: relative;
      }

      .pos-absolute {
        position: absolute;
      }

      .right {
        right: 0;
      }

      .bottom {
        bottom: 0;
      }

      .wd-150px {
        width: 150px;
      }

      .with-divider {
        position: relative;
      }

      .with-divider::after {
        content: "";
        display: block;
        width: 100px;
        position: absolute;
        padding-top: 2px;
        right: 0;
        border-bottom: 1px solid;
      }

      .text-center {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="mt-15">
      <span class="title block text-center">QUOTATION</span>
    </div>
    <span class="block mt-5 text-right"> Date: 2021/8/1 </span>
    <span class="block mt-2 mb-1 text-right"> Currency: NTD </span>
    <table class="billing-content">
      <tbody>
        <tr>
          <th style="width: 50%" colspan="2">Item</th>
          <th style="width: 10%">Quantity</th>
          <th style="width: 20%">Unit Price</th>
          <th style="width: 20%">Total</th>
        </tr>
        <tr>
          <td style="width: 30%"> Nanny & Housekeeper </td>
          <td style="width: 20%"> /month</td>
          <td style="width: 10%"> 1 </td>
          <td style="width: 20%"> 95,000 </td>
          <td style="width: 20%"> 95,000 </td>
        </tr>
        <tr>
          <td style="width: 30%"> Consultant Service Fee </td>
          <td style="width: 20%"> - </td>
          <td style="width: 10%"> 1 </td>
          <td style="width: 20%"> 18,000 </td>
          <td style="width: 20%"> 18,000 </td>
        </tr>
      </tbody>
    </table>
    <div class="mt-15 float-right">
      <div class="text-right">
        <span class="inline-block">Subtotal:</span>
        <span class="inline-block wd-150px text-right with-divider"> 113,000 </span>
      </div>
      <div class="text-right">
        <span class="inline-block">Total:</span>
        <span class="inline-block wd-150px mt-2 text-right"> 113,000 </span>
      </div>
    </div>
  </body>
</html>
`;

  pdf.generatePdf({ content: html }, { format: 'a4' }).then((pdfBuffer) => {
    res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', 'attachment; filename=quotation.pdf');
    res.status(200).send(pdfBuffer);
  });
}
