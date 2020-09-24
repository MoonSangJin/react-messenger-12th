import React from "react";
import styled from "styled-components";

export default function Header(props) {
  const EUNKO = "https://img.techpowerup.org/200908/eun.png";
  const COOL = "https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png";
  const { changeUser } = props;
  const { newMessage } = props;

  const userCheck = () => {
    if (newMessage.user) {
      return <Image src={EUNKO} />;
    } else {
      return <Image src={COOL} />;
    }
  };

  const displayName = () => {
    if (newMessage.user) {
      return "고은";
    } else {
      return "정쿨";
    }
  };

  return (
    <Wrapper>
      <ChangeButton onClick={changeUser}>{userCheck()}</ChangeButton>
      <ShowUser>
        <UserName>{displayName()}</UserName>
        <UserOn>현재 활동중</UserOn>
      </ShowUser>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  width: 100%;
`;
const ShowUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UserName = styled.div`
  font-size: 1.8rem;
`;

const UserOn = styled.div``;

const ChangeButton = styled.div``;

const Image = styled.img`
  width: 5rem;
  border-radius: 1rem;
  margin: 10px;
`;
