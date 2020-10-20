import React, { useState } from 'react';
import styled from 'styled-components';
import ChattingScreen from './components/ChattingScreen';
import MainPage from './components/MainPage';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  const [look, setLook] = useState(false);
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
`;
