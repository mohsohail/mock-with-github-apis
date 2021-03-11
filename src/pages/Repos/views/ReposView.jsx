import React from "react";

// import containers
import ReposListContainer from "../containers/ReposListContainer";

// import styled components
import { Page, Container, NoRepos } from "../styles/ReposPage";

// import error handling
import { ErrorPage } from "../../../errors/ErrorBoundary.style";
import ErrorBoundary from "../../../errors/ErrorBoundary";

const ReposView = ({ reposData, handleFetchRepo }) => {
  return (
    <ErrorBoundary
      renderItem={() => (
        <ErrorPage>
          <div>:(</div>
          <div>Hmm...</div>
          <div>
            That's wierd! No properties for you. We are fixing the problem
          </div>
        </ErrorPage>
      )}
    >
      <Page>
        <Container>
          {reposData.status === 2 && (
            <>
              <ReposListContainer
                reposData={reposData}
                handleFetchRepo={handleFetchRepo}
              />
            </>
          )}
          {reposData.status === 3 && (
            <NoRepos>Couldn't find anything. Try a different username</NoRepos>
          )}
        </Container>
      </Page>
    </ErrorBoundary>
  );
};

export default ReposView;
