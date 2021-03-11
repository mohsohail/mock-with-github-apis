import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../Header";

it("renders Header", () => {
  const { getByTestId, getByText } = render(<Header />);
  expect(getByTestId("__header_container")).toBeInTheDocument();
});
it("renders Logo", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("__logo")).toBeInTheDocument();
});
it("renders Search component", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("__search_component")).toBeInTheDocument();
});
