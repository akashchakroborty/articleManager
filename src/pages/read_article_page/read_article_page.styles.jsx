import styled from "styled-components";

export const ReadArticlePageContainer = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export const Back = styled.div`
  text-decoration: none;
  border: 1px solid blue;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 12px;
  width: fit-content;
  align-self: center;
  color: blue;
  letter-spacing: 3px;
  font-weight: bold;
  line-height: 30px;
`;

Back.displayName = "Back";

export const ReadMorePreviewContainer = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
export const ReadMoreLabel = styled.div`
  text-align: left;
  margin: 20px 4vw;
  padding-bottom: 8px;
  margin-bottom: 32px;
  font-weight: bold;
  color: gray;
  font-size: 28px;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
`;
