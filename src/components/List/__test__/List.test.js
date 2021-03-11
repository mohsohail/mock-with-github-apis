import React from "react";
import { render, cleanup } from "@testing-library/react";
import List from "../List";

describe("<List />", () => {
  it("renders list component", () => {
    render(<List />);
  });
  it("renders list component with props", () => {
    const data = [];
    const renderItem = () => {
      console.log("renderItem");
    };
    const itemSeparator = () => {
      console.log("itemSeparator");
    };
    render(
      <List data={data} renderItem={renderItem} itemSeparator={itemSeparator} />
    );
  });
  it("renders 'no repos' when there are no repositories", () => {
    const { getByText } = render(<List data={[]} />);
    expect(getByText(/No repos/i)).toBeInTheDocument();
  });
});
