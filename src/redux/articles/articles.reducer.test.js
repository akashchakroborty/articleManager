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
import articlesReducer from "./articles.reducer";

const initialState = {
  articles: [],
  article: null,
  isLoading: true,
  error: {},
};

describe("articlesReducer", () => {
  it("should return initial state", () => {
    expect(articlesReducer(undefined, {})).toEqual(initialState);
  });

  it("should return all the articles when get articles action fired", () => {
    const mockArticles = [
      {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 37,
      },
    ];
    const mockPrevState = {
      articles: [],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 37,
      },
      isLoading: false,
      error: {},
    };
    expect(
      articlesReducer(mockPrevState, {
        type: GET_ARTICLES,
        payload: mockArticles,
      }).articles.length
    ).toBe(1);
  });

  it("should return error when article error is fired", () => {
    const mockError = {
      msg: "mock Error",
      status: 400,
    };

    const mockPrevState = {
      articles: [],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 37,
      },
      isLoading: false,
      error: {},
    };
    expect(
      articlesReducer(mockPrevState, {
        type: ARTICLE_ERROR,
        payload: mockError,
      }).error
    ).toBe(mockError);
  });

  it("should return article in articles[0] when create article is fired", () => {
    const mockArticle = {
      title: "Mock data",
      description: "Mock data",
      author: "Mock data",
      content: "Mock data",
      id: "Mock data",
      img: "Mock data",
      avatar: "Mock data",
      claps: 0,
    };

    const mockPrevState = {
      articles: [],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 37,
      },
      isLoading: false,
      error: {},
    };
    expect(
      articlesReducer(mockPrevState, {
        type: GET_ARTICLE,
        payload: mockArticle,
      }).article
    ).toStrictEqual(mockArticle);
  });

  it("should return article  when get article is fired", () => {
    const mockArticle = {
      title: "Mock data",
      description: "Mock data",
      author: "Mock data",
      content: "Mock data",
      id: "Mock data",
      img: "Mock data",
      avatar: "Mock data",
      claps: 0,
    };

    const mockPrevState = {
      articles: [],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 37,
      },
      isLoading: false,
      error: {},
    };
    expect(
      articlesReducer(mockPrevState, {
        type: CREATE_ARTICLE,
        payload: mockArticle,
      }).articles[0]
    ).toStrictEqual(mockArticle);
  });

  it("should delete article from articles when delete article is fired", () => {
    const mockArticle = {
      title: "Mock data",
      description: "Mock data",
      author: "Mock data",
      content: "Mock data",
      id: "1",
      img: "Mock data",
      avatar: "Mock data",
      claps: 0,
    };

    const mockPrevState = {
      articles: [
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "1",
          img: "Mock data",
          avatar: "Mock data",
          claps: 0,
        },
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "2",
          img: "Mock data",
          avatar: "Mock data",
          claps: 0,
        },
      ],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 2,
      },
      isLoading: false,
      error: {},
    };
    expect(
      articlesReducer(mockPrevState, {
        type: DELETE_ARTICLE,
        payload: mockArticle,
      }).articles.includes((article) => article.id === 1)
    ).toBe(false);
  });

  it("should Edit article from articles when Edit article is fired", () => {
    const mockArticle = {
      title: "Edit data",
      description: "Edit data",
      author: "Edit data",
      content: "Edit data",
      id: "1",
      img: "Edit data",
      avatar: "Edit data",
      claps: 40,
    };

    const mockPrevState = {
      articles: [
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "1",
          img: "Mock data",
          avatar: "Mock data",
          claps: 0,
        },
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "2",
          img: "Mock data",
          avatar: "Mock data",
          claps: 0,
        },
      ],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 2,
      },
      isLoading: false,
      error: {},
    };
    expect(
      articlesReducer(mockPrevState, {
        type: EDIT_ARTICLE,
        payload: mockArticle,
      }).articles[0]
    ).toStrictEqual(mockArticle);
  });

  it("should return isLoading true  when api loading is fired", () => {
    const mockPrevState = {
      articles: [],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 37,
      },
      isLoading: false,
      error: {},
    };
    expect(
      articlesReducer(mockPrevState, {
        type: API_LOADING,
        payload: true,
      }).isLoading
    ).toBe(true);
  });

  it("should increase clap count by 1 if clap increment action fired", () => {
    const mockArticle = {
      title: "Mock data",
      description: "Mock data",
      author: "Mock data",
      content: "Mock data",
      id: "Mock data",
      img: "Mock data",
      avatar: "Mock data",
      claps: 38,
    };

    const mockPrevState = {
      articles: [],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 37,
      },
      isLoading: false,
      error: {},
    };

    expect(
      articlesReducer(mockPrevState, {
        type: CLAP_INCREMENT,
        payload: mockArticle,
      }).articles[0].claps
    ).toBe(38);
  });

  it("should clear article if Clear Article action fired", () => {
    const mockPrevState = {
      articles: [],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 37,
      },
      isLoading: false,
      error: {},
    };

    expect(
      articlesReducer(mockPrevState, {
        type: CLEAR_ARTICLE,
      }).article
    ).toBeNull();
  });
});
