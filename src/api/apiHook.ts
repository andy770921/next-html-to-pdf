import useRequest from '../utilities/fetch';
import { TransListResponse } from './types';

const baseURL = 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/';

export const useFetchTransList = () => useRequest<TransListResponse[]>({ baseURL, url: 'application-0-vpdkq/service/lang/incoming_webhook/translation' });
export const useFetchPosts = () => useRequest({ url: 'https://jsonplaceholder.typicode.com/posts/1' });
