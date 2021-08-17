/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse, AxiosError } from 'axios';

// Ref: https://github.com/axios/axios/issues/815#issuecomment-453963910
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (
            error.request.responseType === 'blob' &&
            error.response.data instanceof Blob &&
            error.response.data.type?.toLowerCase().includes('json')
        ) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    // eslint-disable-next-line no-param-reassign
                    error.response.data = JSON.parse(reader.result as string);
                    resolve(Promise.reject(error));
                };

                reader.onerror = () => {
                    reject(error);
                };

                reader.readAsText(error.response.data);
            });
        }
        return Promise.reject(error);
    }
);

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
