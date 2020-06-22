import React from "react";
import { ArticlesOverviewContainer } from "./articles-overview.styles";

import ArticlePreview from "../article-preview/article-preview.component";

const ArticlesOverview = ({ articles }) => {
  return (
    <ArticlesOverviewContainer>
      {articles.map((article) => (
        <ArticlePreview key={article.id} article={article} />
      ))}
    </ArticlesOverviewContainer>
  );
};

export default React.memo(ArticlesOverview);
