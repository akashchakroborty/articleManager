import React from "react";
import {
  ArticleContainer,
  ArticleBoby,
  TitleContainer,
  DescriptionContainer,
  ArticleFooter,
  FooterLeft,
  AvatarImage,
  AvatarAuthorWrapper,
  AuthorContainer,
  DateReadTimeContainer,
  FooterRight,
  ActionContainer,
  ActionImage,
} from "./article-pannel.styles";
import editUrl from "../../assets/edit.png";
import deleteUrl from "../../assets/delete.png";

const ArticlePannel = ({
  title,
  description,
  author,
  avatar,
  date,
  readTime,
  handleReadClick,
  handleEditClick,
  handleToggleDeleteClick,
  ...otherProps
}) => {
  return (
    <ArticleContainer {...otherProps}>
      <ArticleBoby
        className="article-preview-body"
        onClick={handleReadClick}
        {...otherProps}
      >
        <TitleContainer className="article-preview-title">
          {title}
        </TitleContainer>
        <DescriptionContainer>{description}</DescriptionContainer>
      </ArticleBoby>
      <ArticleFooter>
        <AvatarAuthorWrapper {...otherProps} className="article-avatar-author">
          <AvatarImage avatarUrl={avatar} {...otherProps} />
          <FooterLeft>
            <AuthorContainer>By - {author}</AuthorContainer>
            <DateReadTimeContainer>
              {date} . {readTime} ✯
            </DateReadTimeContainer>
          </FooterLeft>
        </AvatarAuthorWrapper>
        {
          <FooterRight {...otherProps}>
            <ActionContainer onClick={handleEditClick} className="edit-article">
              <ActionImage actionUrl={editUrl} />
            </ActionContainer>
            <ActionContainer
              onClick={handleToggleDeleteClick}
              className="delete-article"
            >
              <ActionImage actionUrl={deleteUrl} />
            </ActionContainer>
          </FooterRight>
        }
      </ArticleFooter>
    </ArticleContainer>
  );
};

export default React.memo(ArticlePannel);
