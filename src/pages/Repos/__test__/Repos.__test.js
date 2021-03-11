import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "react-testing-library";
import ReposPage from "../ReposPage";

// afterEach(cleanup);

// const startingState = { count: 0 };
// function reducer(state = { count: 0 }) {}

// function renderWithRedux(
//   component,
//   { initialState, store = (createStore(reducer, initialState) = {}) }
// ) {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//   };
// }
