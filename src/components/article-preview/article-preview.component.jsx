import React, { useState } from "react";
import { ArticlePreviewContainer } from "./article-preview.styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import ArticlePannel from "../article-pannel/article-pannel.component";
import ArticleImagePannel from "../article-image-pannel/article-image-pannel.component";
import {
  deleteArticle,
  getArticle,
} from "../../redux/articles/articles.action";

export const ArticlePreview = ({
  article,
  getArticle,
  deleteArticle,
  history,
  isArticleReadMore,
}) => {
  const { id, img, ...restProps } = article;
  const [showDeleteAlert, ToggleDeleteAlert] = useState(false);
  const handleReadClick = () => {
    history.push(`/readArticle/${id}`);
    getArticle(id);
  };
  const handleEditClick = () => {
    history.push(`editArticle/${id}`);
    getArticle(id);
  };
  const handleToggleDeleteClick = () => {
    console.log("true");
    ToggleDeleteAlert(true);
  };
  return (
    <ArticlePreviewContainer className="article-preview">
      <ArticlePannel
        handleReadClick={handleReadClick}
        handleEditClick={handleEditClick}
        handleToggleDeleteClick={handleToggleDeleteClick}
        isArticleReadMore={isArticleReadMore}
        {...restProps}
      />
      {showDeleteAlert && (
        <SweetAlert
          danger
          showCancel
          confirmBtnText="Yes, delete it!"
          confirmBtnBsStyle="danger"
          title="Are you sure you want to delete this article?"
          onConfirm={() => deleteArticle(id)}
          onCancel={() => {
            ToggleDeleteAlert(false);
          }}
          focusCancelBtn
        >
          You will not be able to recover this article again!
        </SweetAlert>
      )}
      <ArticleImagePannel
        img={img}
        handleReadClick={handleReadClick}
        isArticleReadMore={isArticleReadMore}
      />
    </ArticlePreviewContainer>
  );
};

export default withRouter(
  connect(null, { getArticle, deleteArticle })(React.memo(ArticlePreview))
);
