import React, { Component } from "react";

import List from "../../../components/List/List";

import { RepoListItem, Results } from "../styles/ReposPage";

const Item = ({ data, handleSelect }) => {
  return (
    <RepoListItem onClick={() => handleSelect(data)} highlight>
      <div className="repo-box">
        <div className="repo-description">
          <div className="repo-details">
            <div className="repo-name">{data.full_name}</div>
            <div className="repo-star">stars - {data.stargazers_count}</div>
            <div className="repo-forks">forks - {data.forks}</div>
          </div>
        </div>
      </div>
    </RepoListItem>
  );
};

const itemSeparator = () => {
  return null;
};

const renderList = (data, handleFetchRepo) => {
  return (
    <>
      {data.length && (
        <Results>
          <div>
            <span style={{ color: "#777" }}>username</span> -{" "}
            {data[0].owner.login}
          </div>
          <div>
            <span style={{ color: "#777" }}>repositories</span> - {data.length}{" "}
            repositories fetched
          </div>
        </Results>
      )}
      <List
        data={data}
        renderItem={(data) => (
          <Item
            // key={data.slug}
            data={data}
            handleSelect={handleFetchRepo}
          />
        )}
        itemSeparator={itemSeparator}
      />
      );
    </>
  );
};

class ReposListContainer extends Component {
  render() {
    const {
      reposData: { data },
      handleFetchRepo,
    } = this.props;

    return <div>{renderList(data, handleFetchRepo)}</div>;
  }
}

export default ReposListContainer;
