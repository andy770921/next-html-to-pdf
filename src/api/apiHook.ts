import useRequest from '../utilities/fetch';

const baseURL = 'https://jsonplaceholder.typicode.com/';

export const useFetchTodos = () => useRequest<{id: number; title: string}>({ baseURL, url: 'todos/1' });
export const useFetchPosts = () => useRequest({ baseURL, url: 'posts/1' });
