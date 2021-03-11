import { BASEURL } from "../constants/env";

import { FETCH_REPOS } from "../constants/endpoints";
import { callAPI } from "../utils/api.utils.js";

export const processFetchRepos = async (query) => {
  const request = {
    url: `${BASEURL}${FETCH_REPOS(query)}`,
    method: "get",
  };

  const response = await callAPI(request);
  if (response.length !== 0) {
    return { error: 0, result: response };
  } else {
    return { error: 1 };
  }
};
