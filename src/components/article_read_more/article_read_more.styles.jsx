import styled from "styled-components";

export const ArticleReadMoreContainer = styled.div`
  flex-basis: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ArticleReadClapWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 45%;
  left: 3vw;
  @media screen and (max-width: 800px) {
    left: 0px;
  }
  div {
    cursor: default;
  }
`;
