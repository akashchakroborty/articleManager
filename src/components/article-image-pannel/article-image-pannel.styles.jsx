import styled, { css } from "styled-components";

export const readimageContainerStyle = css`
  width: 100%;
  margin-top: 20px;
  height: 640px;
  cursor: default;
  div {
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const readMoreImageContainerStyle = css`
  width: 100%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const getReadimageContainerStyle = ({
  isArticleRead,
  isArticleReadMore,
}) => {
  if (isArticleRead) {
    return readimageContainerStyle;
  }
  if (isArticleReadMore) {
    return readMoreImageContainerStyle;
  }
};

export const ImageContainer = styled.div`
  cursor: pointer;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 800px) {
    width: 50%;
  }
  ${getReadimageContainerStyle}
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
