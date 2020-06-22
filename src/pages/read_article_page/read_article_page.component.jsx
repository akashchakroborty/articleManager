import React, { Fragment, useEffect, useState } from "react";
import {
  ReadArticlePageContainer,
  Back,
  ReadMorePreviewContainer,
  ReadMoreLabel,
} from "./read_article_page.styles";
import ArticleRead from "../../components/article-read/article-read.component";
import ArticleReadMore from "../../components/article_read_more/article_read_more.component";
import NotFound from "../../components/notfound/notfound.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectArticles,
  selectIsFetching,
  selectArticle,
} from "../../redux/articles/articles.selectors";

export const ReadArticlePage = ({
  articles,
  article,
  match,
  history,
  isLoading,
}) => {
  const validateArticleReadRoute = () => {
    const validIds = articles.map((val) => val.id);
    return validIds.includes(match.params.id);
  };
  const [shuffledArticles, setShuffledArticles] = useState([]);

  useEffect(() => {
    setShuffledArticles(
      [...articles].sort(() => 0.5 - Math.random()).slice(0, 3)
    );
  }, []);

  return validateArticleReadRoute() ? (
    <Fragment>
      <ReadArticlePageContainer>
        <ArticleRead article={article} />
        <Back className="back-button" onClick={() => history.push("/")}>
          BACK
        </Back>
      </ReadArticlePageContainer>
      <ReadMoreLabel className="read-more">More from ReadIt</ReadMoreLabel>
      <ReadMorePreviewContainer className="read-more-container">
        {shuffledArticles.map((article) => (
          <ArticleReadMore key={article.id} article={article} />
        ))}
      </ReadMorePreviewContainer>
    </Fragment>
  ) : (
    <NotFound history={history} />
  );
};

const mapStateToProps = createStructuredSelector({
  articles: selectArticles,
  isLoading: selectIsFetching,
  article: selectArticle,
});

export default connect(mapStateToProps)(WithSpinner(ReadArticlePage));
