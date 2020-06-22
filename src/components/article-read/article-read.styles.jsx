import styled from "styled-components";

export const ArticleReadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

ArticleReadContainer.displayName = "ArticleReadContainer";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  letter-spacing: -0.022em;
  line-height: 1.12;
  align-items: center;
  margin-bottom: 30px;
  word-break: break-all;
  > *:first-child {
    margin-top: 1.95em;
    text-align: left;
    margin-bottom: -0.28em;
    font-size: 34px;
    font-weight: 600;
    @media screen and (max-width: 800px) {
      margin-top: 0px;
      word-break: break-word;
    }
  }
`;

export const Content = styled.div`
  line-height: 32px;
  color: rgba(41, 41, 41, 1);
  margin-top: 0.86em;
  font-size: 21px;
  margin-bottom: -0.46em;
  letter-spacing: -0.003em;
`;

Content.displayName = "Content";

export const SidePannel = styled.div`
  position: fixed;
  width: 160px;
  top: 40%;
  left: 20px;
  text-align: left;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

SidePannel.displayName = "SidePannel";

export const ClapWrapper = styled.div`
  display: flex;
`;

ClapWrapper.displayName = "ClapWrapper";

export const ClapCount = styled.div`
  align-self: flex-end;
  margin: 10px;
  color: grey;
`;
