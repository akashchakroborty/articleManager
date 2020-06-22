import {
  GET_ARTICLES,
  ARTICLE_ERROR,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  CREATE_ARTICLE,
  GET_ARTICLE,
  CLAP_INCREMENT,
  API_LOADING,
  CLEAR_ARTICLE,
} from "./articles.types";
import { addArticleToArticles } from "../../utils/addArticleToArticles";
const initialState = {
  articles: [],
  article: null,
  isLoading: true,
  error: {},
};

const articlesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case API_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_ARTICLE:
      return {
        ...state,
        article: null,
        isLoading: false,
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
        isLoading: false,
      };
    case GET_ARTICLE:
      return {
        ...state,
        article: payload,
        isLoading: false,
      };
    case EDIT_ARTICLE:
      return {
        ...state,
        articles: addArticleToArticles(state.articles, payload),
        article: payload,
        isLoading: false,
      };
    case CLAP_INCREMENT:
      return {
        ...state,
        articles: addArticleToArticles(state.articles, payload),
        article: payload,
        isLoading: false,
      };
    case ARTICLE_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case CREATE_ARTICLE:
      return {
        ...state,
        articles: addArticleToArticles(state.articles, payload),
        article: null,
        isLoading: false,
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((article) => article.id !== payload),
        isLoading: false,
      };
    default:
      return state;
  }
};

export default articlesReducer;
