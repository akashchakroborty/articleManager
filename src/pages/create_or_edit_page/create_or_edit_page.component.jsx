import React from "react";
import { CreateOrEditPageContainer, Back } from "./create_or_edit_page.styles";
import CreateArticle from "../../components/create_article/create_article.component";
import EditArticle from "../../components/edit_article/edit_article.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsFetching,
  selectArticle,
  selectArticles,
} from "../../redux/articles/articles.selectors";
import NotFound from "../../components/notfound/notfound.component";

export const CreateOrEditPage = ({
  isLoading,
  articles,
  article,
  match,
  history,
}) => {
  const validateArticleEditRoute = () => {
    const validIds = articles.map((val) => val.id);
    return validIds.includes(match.params.id) || !article;
  };

  return validateArticleEditRoute() ? (
    <CreateOrEditPageContainer>
      {article ? <EditArticle article={article} /> : <CreateArticle />}
      <Back className="back-button" onClick={() => history.push("/")}>
        BACK
      </Back>
    </CreateOrEditPageContainer>
  ) : (
    <NotFound history={history} />
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  article: selectArticle,
  articles: selectArticles,
});

export default connect(mapStateToProps)(WithSpinner(CreateOrEditPage));
