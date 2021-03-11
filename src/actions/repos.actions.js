import {
  FETCH_REPOS_INIT,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from "../constants/actions";

import { processFetchRepos } from "../services/repos.services.js";

export const fetchRepos = (query) => async (dispatch) => {
  dispatch({
    type: FETCH_REPOS_INIT,
  });

  const response = await processFetchRepos(query);
  if (!response.error) {
    dispatch({
      type: FETCH_REPOS_SUCCESS,
      payload: response.result,
    });
  } else {
    dispatch({
      type: FETCH_REPOS_FAILURE,
      payload: {},
    });
  }
};
