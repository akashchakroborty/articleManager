import React from "react";
import { connect } from "react-redux";
import { HomePageContainer } from "./home_page.styles";
import ArticlesOverview from "../../components/articles-overview/articles-overview.component";
import { getArticles } from "../../redux/articles/articles.action";
import { createStructuredSelector } from "reselect";
import { selectArticles } from "../../redux/articles/articles.selectors";

export const HomePage = ({ getArticles, articles }) => {
  React.useEffect(() => {
    articles.length === 0 && getArticles();
  }, []);
  return (
    <HomePageContainer>
      <ArticlesOverview articles={articles} />
    </HomePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  articles: selectArticles,
});

export default connect(mapStateToProps, { getArticles })(HomePage);
