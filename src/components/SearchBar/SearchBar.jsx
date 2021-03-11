import React from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
// import { debounce } from "../../utils/helper.utils";

import { FlexBox, Icon, SearchInput } from "./Search.style";

class SearchBar extends React.Component {
  // _queryDebounced = debounce(this.props.onQuerySearch, 300);
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  handleSearch = (e) => {
    // this._queryDebounced(e.target.value);
    if (e.key === "Enter") {
      this.props.onQuerySearch(e.target.value);
    }
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSearchCancel = () => {
    this.setState({
      query: "",
    });
  };

  render() {
    return (
      <FlexBox>
        <Icon>
          <FaSearch size={28} color={"#464747"} />
        </Icon>
        <SearchInput
          data-testid="__search_component"
          type="text"
          placeholder="enter github username"
          value={this.state.query}
          onChange={this.handleChange}
          onKeyDown={this.handleSearch}
        />
        {this.state.query ? (
          <Icon onClick={this.handleSearchCancel}>
            <FaTimesCircle size={28} color={"#464747"} />
          </Icon>
        ) : null}
      </FlexBox>
    );
  }
}

export default SearchBar;
