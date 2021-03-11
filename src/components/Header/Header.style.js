import styled from "styled-components";

export const Container = styled.div`
  height: 90px;
  width: 100%;
  box-shadow: ${`0 10px 20px 0 rgba(0, 0, 0, 0.1)`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 60px;
  background-color: #fff;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;
`;
