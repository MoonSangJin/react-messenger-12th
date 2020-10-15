import React, { useState } from 'react';
import styled from 'styled-components';

export default function Header({ firstName, handleSearch, submitHandler }) {
  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="검색"
          value={firstName}
          onChange={handleSearch}
        ></Input>
      </Form>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Input = styled.input``;
const Form = styled.form``;
