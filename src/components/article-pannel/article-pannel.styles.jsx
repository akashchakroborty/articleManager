import styled, { css } from "styled-components";

export const WidthFull = css`
  width: 100%;
`;
export const articleBodyReadStyle = css`
  cursor: text;
  margin-bottom: 20px;
  h2 {
    font-size: 40px;
  }
  p {
    font-size: 24px;
    max-height: unset;
    display: block;
  }
`;
export const displayNone = css`
  display: none;
`;

export const displayBlock = css`
  display: block;
`;
export const getWidthFull = ({ isArticleRead, isArticleReadMore }) => {
  if (isArticleRead || isArticleReadMore) {
    return WidthFull;
  }
};

export const getArticlePannelBodyStyles = ({ isArticleRead }) => {
  if (isArticleRead) {
    return articleBodyReadStyle;
  }
};

export const getDisplayNone = ({ isArticleRead, isArticleReadMore }) => {
  if (isArticleRead || isArticleReadMore) {
    return displayNone;
  }
};

export const getDisplayBlock = ({ isArticleRead }) => {
  if (isArticleRead) {
    return displayBlock;
  }
};

export const ArticleContainer = styled.div`
  width: 60%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: left;
  @media screen and (max-width: 800px) {
    width: 50%;
    ${getWidthFull}
  }
  ${getWidthFull}
`;

ArticleContainer.displayName = "ArticleContainer";

export const ArticleBoby = styled.div`
  cursor: pointer;
  height: 60%;
  ${getArticlePannelBodyStyles}
`;

ArticleBoby.displayName = "ArticleBoby";

export const TitleContainer = styled.h2`
  margin: 0px;
  margin-bottom: 15px;
`;

export const DescriptionContainer = styled.p`
  color: gray;
  margin-bottom: 15px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const ArticleFooter = styled.div`
  height: 40%;
  display: flex;
  justify-content: space-between;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const AvatarAuthorWrapper = styled.div`
  display: flex;
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 60%;
    ${getWidthFull}
  }
  ${getWidthFull}
`;
export const AvatarImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  align-self: center;
  margin-right: 10px;
  background-position: center;
  background-image: ${({ avatarUrl }) => `url(${avatarUrl})`};
  display: none;
  ${getDisplayBlock}
`;
export const AuthorContainer = styled.div`
  color: black;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const DateReadTimeContainer = styled.div`
  color: grey;
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: flex-end;
  width: 30%;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    width: 40%;
  }
  ${getDisplayNone}
`;

export const ActionContainer = styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

ActionContainer.displayName = "ActionContainer";

export const ActionImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ actionUrl }) => `url(${actionUrl})`};
`;
