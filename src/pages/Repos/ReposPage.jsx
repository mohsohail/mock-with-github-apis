import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
// import actions
import { fetchRepos } from "../../actions/repos.actions";

// import view
import ReposView from "./views/ReposView";

class ReposPage extends Component {
  state = {
    query: "",
  };

  componentDidMount() {
    const querySearch = this.props.match.params.slug;
    if (querySearch) {
      this.props.fetchRepos(querySearch);
    } else {
      this.props.fetchRepos();
    }
    this.setState({
      query: querySearch,
    });
  }

  handleFetchRepo = (repo) => {
    window.location.href = repo.html_url;
    return null;
  };

  onQuerySearch = (query) => {
    this.props.fetchRepos(query);
  };

  render() {
    const { reposData } = this.props;
    const { query } = this.state;
    if (reposData.status === 1) {
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
    }
    return (
      <>
        <Header
          query={query}
          onQuerySearch={this.onQuerySearch}
          handleSearchCancel={this.handleSearchCancel}
        />
        <div>
          <ReposView
            {...this.props}
            reposData={reposData}
            handleFetchRepo={this.handleFetchRepo}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reposData: state.properties.reposData,
  };
};

export default connect(mapStateToProps, { fetchRepos })(ReposPage);
