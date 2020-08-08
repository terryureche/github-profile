import React from 'react';
import Profile from "./Profile";
import logo from '../logo.svg';
import Header from "../components/Header/Header";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
 `;

const AppWrapper = styled.div`
text-align: center;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <Header logo={logo} />
                <Profile />
            </AppWrapper>
        </>
    );
}

export default App;
