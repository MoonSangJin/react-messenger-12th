import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Header({ setFirstName }) {
  const [keyWord, setKeyWord] = useState('');
  const handleSearch = (e) => {
    //search창에서 입력시마다 동작
    console.log(`${keyWord}찾는중`); //이때 eachprofile보이게
    setKeyWord(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setKeyWord('');
  };

  useEffect(() => {
    setFirstName(keyWord);
  }, [keyWord, setFirstName]);

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="검색"
          value={keyWord}
          onChange={handleSearch}
        ></Input>
      </Form>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Input = styled.input``;
const Form = styled.form``;
