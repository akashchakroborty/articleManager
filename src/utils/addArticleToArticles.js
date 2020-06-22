export const addArticleToArticles = (articles, articleToAdd) => {
  const exisitingArticle = articles.find(
    (article) => article.id === articleToAdd.id
  );

  if (exisitingArticle) {
    return articles.map((article) =>
      article.id === articleToAdd.id ? { ...articleToAdd } : article
    );
  }

  return [{ ...articleToAdd }, ...articles];
};
