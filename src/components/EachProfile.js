import React from 'react';
import styled from 'styled-components';
import ProfileContent from './ProfileContent';
export default function EachProfile({ searchResult, whichState }) {
  return (
    <Wrapper>
      {searchResult.map((profile, index) => {
        return (
          <ProfileRow key={index}>
            <ProfilePart>
              <ProfileImage src={profile.url} />
              <ProfileName>{profile.name}</ProfileName>
            </ProfilePart>
            <ProfileContent {...{ profile, whichState }} />
          </ProfileRow>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ProfileRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfilePart = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  margin: 5px;
`;

const ProfileName = styled.div`
  margin-left: 8px;
`;
