import React, { FC } from 'react';
import { useFetchTodos } from '../api/apiHook';

const IndexPage: FC = () => {
  const { data } = useFetchTodos();
  return (
    data ? (
      <>
        <div>{`Todos ID: ${data.id}`}</div>
        <div>{`Todos Title: ${data.title}`}</div>
      </>
    ) : <div>loading...</div>
  );
};

export default IndexPage;
