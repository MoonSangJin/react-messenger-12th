import React from 'react';
import styled from 'styled-components';
import HomeLogo from '../kakao.jpg';

export default function Friends() {
  return (
    <Wrapper>
      <img src={HomeLogo} width="150px" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f7e600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
