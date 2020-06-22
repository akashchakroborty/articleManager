import axios from "axios";
import { setAlert } from "../alert/alert.action";
import {
  GET_ARTICLES,
  ARTICLE_ERROR,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
  CREATE_ARTICLE,
  CLEAR_ARTICLE,
  GET_ARTICLE,
  CLAP_INCREMENT,
  API_LOADING,
} from "./articles.types";

// Get all articles
export const getArticles = () => async (dispatch) => {
  try {
    dispatch({
      type: API_LOADING,
      payload: true,
    });
    const res = await axios.get("/articles");

    dispatch({
      type: GET_ARTICLES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Clear Article on create article.
export const clearArticle = () => {
  return {
    type: CLEAR_ARTICLE,
  };
};

// Create an article
export const createArticle = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({
      type: API_LOADING,
      payload: true,
    });

    const res = await axios.post("/articles", formData, config);
    dispatch({
      type: CREATE_ARTICLE,
      payload: res.data,
    });

    dispatch(setAlert("Article has been created successfully.", "primary"));
  } catch (err) {
    dispatch({
      type: ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get an article
export const getArticle = (id) => async (dispatch) => {
  try {
    dispatch({
      type: API_LOADING,
      payload: true,
    });

    const res = await axios.get(`/articles/${id}`);

    dispatch({
      type: GET_ARTICLE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete an article
export const deleteArticle = (id) => async (dispatch) => {
  try {
    dispatch({
      type: API_LOADING,
      payload: true,
    });

    await axios.delete(`/articles/${id}`);

    dispatch({
      type: DELETE_ARTICLE,
      payload: id,
    });

    dispatch(setAlert("Article has been deleted successfully.", "danger"));
  } catch (err) {
    dispatch({
      type: ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit an article
export const editArticle = (articleId, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({
      type: API_LOADING,
      payload: true,
    });

    const res = await axios.put(`/articles/${articleId}`, formData, config);

    dispatch({
      type: EDIT_ARTICLE,
      payload: res.data,
    });

    dispatch(setAlert("Article has been edited successfully.", "success"));
  } catch (err) {
    dispatch({
      type: ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const incrementClapsInArticle = (articleId, updatedArticle) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put(
      `/articles/${articleId}`,
      updatedArticle,
      config
    );

    dispatch({
      type: CLAP_INCREMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
