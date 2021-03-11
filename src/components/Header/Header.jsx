import React from "react";
import { Container } from "./Header.style";
import SearchBar from "../SearchBar/SearchBar";
import { ReactComponent as Logo } from "../../assets/github-logo.svg";

const Header = ({ query, onQuerySearch }) => {
  return (
    <Container data-testid="__header_container">
      {/* <LogoText></LogoText> */}
      {/* <img className="" src="../" /> */}
      <Logo data-testid="__logo" width={60} height={60} />
      <SearchBar onQuerySearch={onQuerySearch} query={query} />
    </Container>
  );
};

export default Header;
