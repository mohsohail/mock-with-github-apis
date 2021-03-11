import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 20px;
`;
export const ListHeader = styled.div`
  /* vertical-align: bottom; */
`;

export const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 12px;
  justify-content: center;
  align-content: center;
  /* media query for tablets */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  /* media query for smaller mobile devices */
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
