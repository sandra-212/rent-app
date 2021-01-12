import React from "react";
import styled from "styled-components";

const Header = () => (
  <Wrapper>
    <h1>Searching for a perfect home made easy</h1>
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #006666;
  color: white;
  font-size: 12px;
  height: 50px;
  padding: 18px;
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;

export default Header;
