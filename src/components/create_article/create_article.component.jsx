import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import getCurrentData from "../../utils/getCurrentData";
import getReadTimeInMin from "../../utils/getReadTimeInMin";
import { withRouter } from "react-router-dom";
import { createArticle } from "../../redux/articles/articles.action";
import FormComponent from "../form/form.component";

export const CreateArticle = ({ createArticle, history }) => {
  const [article, setarticle] = useState({
    title: "",
    claps: 0,
    description: "",
    id: uuid(),
    readTime: "0 min read",
    date: getCurrentData(),
    author: "",
    content: "",
    img: `https://loremflickr.com/240/400/programming?lock=${Math.floor(
      Math.random() * 1000
    )}`,
    avatar: `https://loremflickr.com/100/100/profilepic?lock=${Math.floor(
      Math.random() * 1000
    )}`,
  });

  const { title, description, author, content } = article;

  useEffect(() => {
    const articleReadTime = getReadTimeInMin(content);

    setarticle({ ...article, readTime: articleReadTime });
  }, [getReadTimeInMin(content)]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    createArticle(article);
    history.push("/");
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setarticle({ ...article, [name]: value });
  };

  return (
    <FormComponent
      handleSubmit={handleSubmit}
      title={title}
      description={description}
      author={author}
      content={content}
      handleChange={handleChange}
    />
  );
};

export default withRouter(connect(null, { createArticle })(CreateArticle));
