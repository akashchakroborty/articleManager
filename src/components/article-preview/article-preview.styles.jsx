import styled from "styled-components";

export const ArticlePreviewContainer = styled.div`
  width: 80%;
  display: flex;
  height: 340px;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 300px
  }
`;

ArticlePreviewContainer.displayName = "ArticlePreviewContainer";
