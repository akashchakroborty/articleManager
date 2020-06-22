import { createSelector } from "reselect";

export const selectArticleList = (state) => state.articlesList;

export const selectArticles = createSelector(
  [selectArticleList],
  (articlesList) => articlesList.articles
);

export const selectArticle = createSelector(
  [selectArticleList],
  (articlesList) => articlesList.article
);

export const selectIsFetching = createSelector(
  [selectArticleList],
  (articlesList) => articlesList.isLoading
);
