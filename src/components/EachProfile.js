import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../list.json';
export default function EachProfile({ searchResult }) {
  return (
    <Wrapper>
      {searchResult.map((profile, index) => {
        return (
          <ProfileRow key={index}>
            <ProfileImage src={profile.url} />
            <ProfileName>
              {profile.name}
              <ProfileContent>{profile.name}</ProfileContent>
            </ProfileName>
          </ProfileRow>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  margin: 5px;
`;

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #aadbff;
  width: 200px;
  height: 50px;
  border-radius: 20px;
`;
const ProfileContent = styled.div`
  margin-left: 10px;
  background: #f3f3f3;
  border-radius: 3px;
  padding: 4px;
`;
