import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 55px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

NotFoundContainer.displayName = "NotFoundContainer";

export const NotFoundText = styled.h1`
  color: grey;
  margin-left: 10px;
  cursor: pointer;
`;
