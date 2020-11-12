import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './Search';
import EachProfile from './EachProfile';
import data from '../list.json';

export default function Profile({ whichState }) {
  const [firstName, setFirstName] = useState('');
  const [searchResult, setSearchResult] = useState(data);
  const [searching, setSearching] = useState(false);

  const filterProfile = (find) => {
   find && (
      const result = data.filter((element) => element.name.indexOf(find) === 0);
      setSearchResult(result));
    }
  };

  useEffect(() => {
    filterProfile(firstName);
  }, [firstName]);

  return (
    <Wrapper>
      <Search
        {...{
          setFirstName,
          setSearching,
        }}
      ></Search>
      <EachProfile {...{ searchResult, whichState, searching }}></EachProfile>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
