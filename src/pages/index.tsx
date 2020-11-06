import React, { FC } from 'react';
import { useFetchTransList } from '../api/apiHook';

const IndexPage: FC = () => {
  const { data: transList } = useFetchTransList();
  return (
    <>
      {transList ? transList.map(({
        id, key, TW, CN, EN, pages,
      }) => (
        <div key={id} style={{ marginBottom: '20px' }}>
          <div>{`Translation Key: ${key}`}</div>
          <div>{`TW: ${TW}`}</div>
          <div>{`CN: ${CN}`}</div>
          <div>{`EN: ${EN}`}</div>
          <div>{`pages: ${JSON.stringify(pages)}`}</div>
        </div>
      ))
        : <div>loading...</div>}
    </>
  );
};

export default IndexPage;
