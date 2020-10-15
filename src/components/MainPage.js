import React from 'react';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Friends from './Friends';
import Chatting from './Chatting';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

export default function MainPage() {
  return (
    <Wrapper>
      <Router>
        <MenuBar>
          <Empty>
            <Link to="/">
              <HomeIcon
                fontSize="large"
                style={{ color: 'white', margin: '8px' }}
              />
            </Link>
            <Link to="/Friends">
              <PersonIcon
                fontSize="large"
                style={{ color: 'white', margin: '8px' }}
              />
            </Link>
            <Link to="/Chatting">
              <ChatBubbleIcon
                fontSize="large"
                style={{ color: 'white', margin: '8px' }}
              />
            </Link>
          </Empty>
          <Empty />
          <Empty>
            <NotificationsIcon
              fontSize="large"
              style={{ color: 'white', margin: '10px' }}
            />
            <SettingsIcon
              fontSize="large"
              style={{ color: 'white', margin: '10px' }}
            />
          </Empty>
        </MenuBar>

        <MessageBar>
          <Route exact path="/" component={Home} />
          <Route exact path="/Friends" component={Friends} />
          <Route exact path="/Chatting" component={Chatting} />
        </MessageBar>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const MenuBar = styled.div`
  background: #432616;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MessageBar = styled.div`
  background: #white;
  width: 80vw;
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;