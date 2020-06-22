import React, { useState, useEffect } from "react";
import ArticlePannel from "../article-pannel/article-pannel.component";
import ArticleImagePannel from "../article-image-pannel/article-image-pannel.component";
import {
  ArticleReadContainer,
  ContentContainer,
  Content,
  SidePannel,
  ClapCount,
  ClapWrapper,
} from "./article-read.styles";
import {
  ActionContainer,
  ActionImage,
  ArticleBoby,
  TitleContainer,
  DescriptionContainer,
} from "../article-pannel/article-pannel.styles";
import { connect } from "react-redux";
import { incrementClapsInArticle } from "../../redux/articles/articles.action";
import clapIcon from "../../assets/clapIcon.png";

export const ArticleRead = ({ article, incrementClapsInArticle }) => {
  const { id, img, content, ...restprops } = article;
  const { title, description } = article;
  let { claps } = article;
  const splitContent = content.split(/\r?\n/);

  const clapIncrementHandeller = () => {
    incrementClapsInArticle(id, { ...article, claps: ++claps });
  };
  const [scroll, setScroll] = useState({
    hide: true,
    scrollPos: -212,
  });
  const { hide, scrollPos } = scroll;

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const handleScroll = () => {
    const wrappedElement = document.getElementById("bottomClap");
    setScroll({
      ...scroll,
      scrollPos: document.body.getBoundingClientRect().top,
      hide:
        document.body.getBoundingClientRect().top > scrollPos ||
        isBottom(wrappedElement),
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ArticleReadContainer>
      <ArticlePannel {...restprops} isArticleRead />
      <ArticleImagePannel img={img} isArticleRead id="article-read-image" />
      <ContentContainer className="article-content">
        {splitContent.map((content, index) => (
          <Content key={index}>{content}</Content>
        ))}
      </ContentContainer>
      {!hide && (
        <SidePannel className="article-side-pannel">
          <ArticleBoby>
            <TitleContainer>{title}</TitleContainer>
            <DescriptionContainer>{description}</DescriptionContainer>
          </ArticleBoby>
          <ClapWrapper>
            <ActionContainer
              className="clap-icon"
              onClick={clapIncrementHandeller}
            >
              <ActionImage actionUrl={clapIcon} />
            </ActionContainer>
            <ClapCount className="clap-count">{claps}</ClapCount>
          </ClapWrapper>
        </SidePannel>
      )}
      <ClapWrapper id="bottomClap">
        <ActionContainer className="clap-icon" onClick={clapIncrementHandeller}>
          <ActionImage actionUrl={clapIcon} />
        </ActionContainer>
        <ClapCount className="clap-count">{claps} Claps</ClapCount>
      </ClapWrapper>
    </ArticleReadContainer>
  );
};

export default connect(null, { incrementClapsInArticle })(ArticleRead);
