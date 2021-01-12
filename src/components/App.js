import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import Map from "./Map";
import Sidebar from "./Sidebar";
import { requestOffers, getOffers, receiveOffersError } from "../actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestOffers())
    fetch("http://localhost:5678/offers")
      .then((res) => res.json())
      .then((data) => dispatch(getOffers(data.data)))
      .catch((err) => dispatch(receiveOffersError(err)))
  }, []); 
  const offers = useSelector((state) => state.offers); 
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Map offers={offers} />
        <SideWrapper>
          <Sidebar offers={offers} />
        </SideWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 55vw 45vw;
  grid-template-areas: "main sidebar";
  @media (max-width: 650px) {
    display: block;
  }
`;

const SideWrapper = styled.div`
  grid-area: sidebar;
  padding-left: 8px;
  height: 100vh;
  overflow: scroll;
`;

export default App;
