import styled from "styled-components";

export const Page = styled.div`
  margin-top: 110px;
`;
export const Container = styled.div`
  margin: 30px 60px;
`;

export const Results = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #242424;
`;

export const RepoListItem = styled.div`
  font-size: 16px;
  color: rgb(123, 131, 137);
  margin-bottom: 20px;
  width: 100%;

  .repo-box {
    background-color: #fff;
    margin-right: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    /* media query for tablets */
    @media (max-width: 768px) {
    }
    /* media query for smaller mobile devices */
    @media (max-width: 576px) {
      width: 100%;
    }
    .repo-backdrop {
      width: 100%;
    }
    .repo-description {
      padding: 20px;
      .repo-details {
        font-size: 16px;
        font-weight: 700;
        color: #444;
        margin: 12px;
        margin-left: 0px;
        margin-bottom: 0px;
      }
      .repo-star {
        font-size: 14px;
        font-weight: 500;
        color: #888;
        margin-left: 0px;
        margin-top: 5px;
      }
      .repo-forks {
        font-size: 14px;
        font-weight: 500;
        color: #888;
        margin: 12px;
        margin-left: 0px;
        margin-top: 2px;
      }
    }
    &:hover {
      box-shadow: 0 0.25rem 1rem 0 rgba(31, 45, 65, 0.25);
    }
  }
`;

export const NoRepos = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #464747;
`;
