import React from "react";
import ArticlePreview from "../article-preview/article-preview.component";
import {
  ArticleReadMoreContainer,
  ArticleReadClapWrapper,
} from "./article_read_more.styles";
import { ClapCount } from "../article-read/article-read.styles";
import {
  ActionContainer,
  ActionImage,
} from "../article-pannel/article-pannel.styles";
import clapIcon from "../../assets/clapIcon.png";

const ArticleReadMore = ({ article }) => {
  const { claps } = article;
  return (
    <ArticleReadMoreContainer>
      <ArticlePreview article={article} isArticleReadMore />
      <ArticleReadClapWrapper>
        <ActionContainer>
          <ActionImage actionUrl={clapIcon} />
        </ActionContainer>
        <ClapCount>{claps}</ClapCount>
      </ArticleReadClapWrapper>
    </ArticleReadMoreContainer>
  );
};

export default React.memo(ArticleReadMore);
