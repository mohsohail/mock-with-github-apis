import * as React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ErrorBoundary from "./errors/ErrorBoundary";
import styled from "styled-components/macro";
// import { ErrorPage } from "./src/errors/ErrorBoundary.style";

export const ErrorPage = styled.div`
  height: 100vh;
  font-size: 34px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aeaeae;
  div {
    padding: 10px;
  }
`;

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ErrorBoundary
        renderItem={() => (
          <div>Error Occured, we will look into this, promise!</div>
        )}
      >
        <App />
      </ErrorBoundary>
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
