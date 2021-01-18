import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getSelectedOffer } from "../reducers";
import Slider from "./Slider";

const Sidebar = (props) => {
  const selectedOffer = useSelector(getSelectedOffer);

  return (
    <div>
      <Head>{""} </Head>
      {selectedOffer ? (
        <Wrapper>
          <Slider first={selectedOffer.img} />
          <h3> {selectedOffer.rent}</h3>
          <p>2330 Rue Sherbrooke Ouest - Montréal, QC </p>
          <h4>{selectedOffer.type} </h4>
          <p>{selectedOffer.description}</p>
        </Wrapper>
      ) : (
        <div>
          <Head>Montréal Apartments, Condos and Houses for Rent </Head>
          <NumOffers>{props.offers.length} Rentals found</NumOffers>
          <Wrapper>
            {props.offers.map((offer) => {
              return (
                <ul key={offer.id}>
                  <h3> {offer.rent}</h3>
                  <img src={offer.img} alt="" height="200" width="300" />
                  <p>2330 Rue Sherbrooke Ouest - Montréal, QC </p>
                  <h4>{offer.type} </h4>
                </ul>
              );
            })}
          </Wrapper>
        </div>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  color: #5c6f73;
  width: 100%;
  height: 100%;
  padding: 30px;
  text-align: center;
  padding-top: 0;
  h3 {
    font-weight: bold;
    color: #006666;
    margin-top: 30px;
  }
  p {
    margin-top: 30px;
  }
  ul {
    margin-top: 30px;
  }
`;

const Head = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #5c6f73;
  padding-left: 30px;
  margin: 30px;
`;

const NumOffers = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #404040;
  margin: 0;
  text-align: center;
`;

export default Sidebar;
