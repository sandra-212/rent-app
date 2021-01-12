export const selectOffer = (offer) => ({
  type: "SELECT_OFFER",
  offer
});

export const requestOffers = () => ({
  type: "REQUEST_OFFERS"
});

export const getOffers = (offers) => ({
  type: "GET_OFFERS",
  offers
});

export const receiveOffersError = (err) => ({
  type: "RECEIVE_OFFERS_ERROR",
  err
});
