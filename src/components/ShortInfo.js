import React from "react";
import { useDispatch } from "react-redux";
import { selectOffer } from "../actions";
import styled from "styled-components";

const ShortInfo = (props) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <img src={props.popup.img} alt="" width="60" height="50" />
      <h3>{props.popup.rent}</h3>
      <StyledButton
        onClick={() => {
          dispatch(selectOffer(props));
        }}
      >
        {">>>"}
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  h3 {
    font-weight: bold;
    color: #006666;
  }
`;
const StyledButton = styled.button`
  border: none;
  font-size: 15px;
  padding: 0;
  margin-left: 5px;
  margin-bottom: 2px;
  color: #5c6f73
  text-decoration: underline;
  cursor: pointer;
  background-color: transparent;
`;

export default ShortInfo;
