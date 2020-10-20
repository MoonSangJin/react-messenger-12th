import React from 'react';
import styled from 'styled-components';

export default function ProfileContent({ profile, whichState }) {
  return whichState ? (
    <Wrapper sending={whichState}>{profile.name}</Wrapper>
  ) : (
    <Wrapper sending={whichState}>{profile.chatting}</Wrapper>
  );
}

const Wrapper = styled.div`
  color: gray;
  font-size: 0.8rem;
  border: ${(props) => (props.sending ? '3px solid #00ff00' : '')};
  border-radius: ${(props) => (props.sending ? '10px' : '3px')};
  margin: 8px;
  width: ${(props) => (props.sending ? '80px' : '200px')};
  text-align: ${(props) => (props.sending ? 'center' : '')};
  overflow: hidden;
  text-overflow: ellipsis;
`;
