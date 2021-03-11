import {
  FETCH_REPOS_INIT,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from "../constants/actions";

const initialState = {
  reposData: {
    status: 0,
    message: "",
    data: {},
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOS_INIT:
      return {
        ...state,
        reposData: {
          status: 1,
          message: "init",
          data: {},
        },
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        reposData: {
          status: 2,
          message: "success",
          data: action.payload,
        },
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        reposData: {
          status: 3,
          message: "failure",
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
