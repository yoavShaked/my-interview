import * as types from "../actions/types";

const initialState = {
    results: [],
    image: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_RESULTS: {
      const { results } = action.payload;
      return { ...state, results };
    }
    case types.SET_IMAGE: {
      const { image } = action.payload;
      return { ...state, image };
    }
    default: return state;
  }
};
