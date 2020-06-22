import React from "react";
import { ImageContainer, Image } from "./article-image-pannel.styles";
const ArticleImagePannel = ({ handleReadClick, img, ...otherProps }) => {
  return (
    <ImageContainer
      className="article-image"
      {...otherProps}
      onClick={handleReadClick}
    >
      <Image imageUrl={img} {...otherProps} />
    </ImageContainer>
  );
};

export default React.memo(ArticleImagePannel);
