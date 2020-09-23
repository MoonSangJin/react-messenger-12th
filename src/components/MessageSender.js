import React from "react";
import styled from "styled-components";

export default function MessageSender({
  changeInputMessage,
  addMessage,
  newMessage,
}) {
  return (
    <Wrapper>
      <input
        type="text"
        autofocus
        name="content"
        placeholder="할 말을 입력하세요"
        onChange={changeInputMessage}
        value={newMessage.content}
      ></input>
      <button onClick={addMessage}>전송</button>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
