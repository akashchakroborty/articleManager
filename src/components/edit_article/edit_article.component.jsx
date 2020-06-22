import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import getCurrentData from "../../utils/getCurrentData";
import getReadTimeInMin from "../../utils/getReadTimeInMin";
import { withRouter } from "react-router-dom";
import { editArticle } from "../../redux/articles/articles.action";
import FormComponent from "../form/form.component";

export const EditArticle = ({ article, history, editArticle }) => {
  const {
    title: editTitle,
    description: editDescription,
    author: editAuthor,
    content: editContent,
    id: editId,
    img: editImg,
    avatar: editAvatar,
    claps: editClaps,
  } = article;

  const [changedArticle, setarticle] = useState({
    title: editTitle,
    claps: editClaps,
    description: editDescription,
    id: editId,
    readTime: "0 min read",
    date: getCurrentData(),
    author: editAuthor,
    content: editContent,
    img: editImg,
    avatar: editAvatar,
  });

  const { title, description, author, content, id } = changedArticle;

  useEffect(() => {
    const articleReadTime = getReadTimeInMin(content);

    setarticle({ ...changedArticle, readTime: articleReadTime });
  }, [getReadTimeInMin(content)]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    editArticle(id, changedArticle);
    history.push("/");
  };

  const handleChange = (event) => {
    event.preventDefault();

    const { value, name } = event.target;

    setarticle({ ...changedArticle, [name]: value });
  };

  return (
    <FormComponent
      handleSubmit={handleSubmit}
      title={title}
      description={description}
      author={author}
      edit
      content={content}
      handleChange={handleChange}
    />
  );
};

export default withRouter(connect(null, { editArticle })(EditArticle));
