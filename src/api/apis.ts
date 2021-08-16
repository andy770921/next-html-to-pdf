/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse, AxiosError } from 'axios';

const handleAxiosResponse =
    <T, U = { message: string }>(fn: (...params: any[]) => Promise<AxiosResponse>) =>
    (...params: any[]) =>
        fn(...params)
            .then((res: AxiosResponse) => res.data as T)
            .catch((error: AxiosError<U>) => {
                const errorData = error.response?.data;
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                if (errorData) throw errorData;
                throw error;
            });

export const apiGetPdf = (params: { title: string }) =>
    handleAxiosResponse<Blob>(axios.get)('/api/pdf', { responseType: 'blob', params });
