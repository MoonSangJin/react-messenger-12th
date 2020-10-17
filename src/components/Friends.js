import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
export default function Friends() {
  return (
    <Wrapper>
      <FriendsNumber>friends</FriendsNumber>
      <Profile />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: unset;
`;

const FriendsNumber = styled.div``;
