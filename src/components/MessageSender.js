import React from "react";
import styled from "styled-components";

export default function MessageSender() {
  return (
    <Wrapper>
      <input type="text"></input>
      <button>전송</button>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
