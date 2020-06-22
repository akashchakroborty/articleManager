import {
  selectArticleList,
  selectArticle,
  selectArticles,
  selectIsFetching,
} from "./articles.selectors";

describe("Articles Selector", () => {
  it("Test articles selectors", () => {
    const mockState = {
      articlesList: { articles: [], article: {}, isLoading: false },
    };

    expect(selectArticleList(mockState)).toEqual(mockState.articlesList);
    expect(selectArticles(mockState)).toEqual(mockState.articlesList.articles);
    expect(selectIsFetching(mockState)).toEqual(
      mockState.articlesList.isLoading
    );
    expect(selectArticle(mockState)).toEqual(mockState.articlesList.article);
  });
});
