import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import fileDownload from 'js-file-download';
import { apiGetPdf } from '@api/apis';

const StyledFrom = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    width: 300px;
    margin: 32px auto;
`;

const StyledLabel = styled.label`
    margin-bottom: 8px;
`;

const StyledButton = styled.button`
    font-size: 20px;
    margin-top: 32px;
    padding: 20px;
`;

const StyledHint = styled.span`
    font-size: 16px;
    color: red;
    text-align: center;
    margin-top: 16px;
`;

const IndexPage: FC = () => {
    const [title, setTitle] = useState('QUATATION');
    const [submittedHint, setSubmittedHint] = useState('');
    const { mutate: getPdf, isLoading } = useMutation<Blob, { message: string }, { title: string }>(apiGetPdf);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getPdf(
            { title },
            {
                onSuccess: (data) => {
                    fileDownload(data, `${title}.pdf`);
                    setSubmittedHint('Get PDF Successfully');
                },
                onError: ({ message }) => {
                    setSubmittedHint(`Error: ${message}`);
                },
            }
        );
    };

    return (
        <StyledFrom onSubmit={handleSubmit}>
            <StyledLabel htmlFor="title-input">Title of the PDF</StyledLabel>
            <input id="title-input" type="text" value={title} onChange={handleTitleChange} />
            <StyledButton type="submit" disabled={isLoading}>
                Download PDF
            </StyledButton>
            <StyledHint>{submittedHint}</StyledHint>
        </StyledFrom>
    );
};

export default IndexPage;
