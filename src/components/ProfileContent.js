import React from 'react';
import styled from 'styled-components';

export default function ProfileContent({ profile, whichState }) {
  return whichState ? (
    <Wrapper>{profile.name}</Wrapper>
  ) : (
    <Wrapper>{profile.chatting}</Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f3f3f3;
  border-radius: 3px;
  margin-right: 8px;
  width: 80px;
  text-align: center;
`;
