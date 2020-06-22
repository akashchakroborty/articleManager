import styled from "styled-components";

export const ArticlesOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
ArticlesOverviewContainer.displayName = "ArticlesOverviewContainer";
