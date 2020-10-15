import React from 'react';
import styled from 'styled-components';
import ChattingScreen from './components/ChattingScreen';
import MainPage from './components/MainPage';

export default function App() {
  return (
    <Wrapper>
      <MainPage></MainPage>
      {/* <ChattingScreen></ChattingScreen> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
`;
