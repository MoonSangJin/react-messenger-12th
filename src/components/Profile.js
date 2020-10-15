import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './Search';
import data from '../list.json';
import EachProfile from './EachProfile';
export default function Profile({ ProfileNumber }) {
  const [firstName, setFirstName] = useState('');

  const [filteredData, setFilterData] = useState(data);

  const handleSearch = (e) => {
    setFirstName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName);
    setFirstName('');
    //firstName을 받아왔다는 표시해주고, 그 증거를 EachProfile로 props로 전달 EachProfile내에서 props확인해서 필터링해서 그리자
  };
  // const data_filter = data.filter((element) => element.name == 'Beenzino');
  // console.log(data_filter);

  return (
    <Wrapper onClick={ProfileNumber}>
      <Search {...{ firstName, handleSearch, submitHandler }}></Search>
      <EachProfile {...{ filteredData }}></EachProfile>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
