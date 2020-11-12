import React, { FC } from 'react';
import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';
import { useFetchTransList } from '../api/apiHook';

const Box = styled.div<ColorProps>`
  ${color}
  padding: 15px;
  border-radius: 10px;
`;

const IndexPage: FC = () => {
  const { data: transList } = useFetchTransList();
  return (
    <>
      <Box color="white" bg="tomato">1234</Box>
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
