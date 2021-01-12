const initialState = { offers: [], selectedOffer: null, status: "" };

export default function offerReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_OFFER": {
      return {
        ...state,
        selectedOffer: action.offer
      };
    }
    case "REQUEST_OFFERS": {
      return {
        ...state,
        status: "loading"
      };
    }
    case "GET_OFFERS": {
      return {
        ...state,
        status: "ready",
        offers: action.offers
      };
    }
    case "RECEIVE_OFFERS_ERROR": {
      return {
        ...state,
        status: "error"
      };
    }
    default:
      return state;
  }
}

export const getSelectedOffer = (state) => {
  if (state.selectedOffer) {
    return state.selectedOffer.popup;
  }
  return null;
};
