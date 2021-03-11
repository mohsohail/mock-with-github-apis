export const FETCH_REPOS = (query) => {
  if (query) {
    return `/users/${query}/repos`;
  }
  return `/users/mohsohail/repos`;
};
