import React from "react";

// import style components
import { ListContainer, ListHeader, ListItemContainer } from "./List.style";

const List = ({ data, renderItem, itemSeparator }) => {
  return (
    <ListContainer data-testid="_component_list">
      {data && !data.length ? (
        <div>No repos</div>
      ) : (
        <ListItemContainer>
          {data &&
            data.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  {renderItem(item)}
                  {itemSeparator && itemSeparator()}
                </React.Fragment>
              );
            })}
        </ListItemContainer>
      )}
    </ListContainer>
  );
};

export default React.memo(List);
