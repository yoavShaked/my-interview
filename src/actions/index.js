import * as types from "./types";

export const setSearchResult = (results) => ({
  type: types.SET_SEARCH_RESULTS,
  payload: {
    results,
  },
});

export const setImage = (image) => ({
    type: types.SET_IMAGE,
    payload: {
        image
    }
})