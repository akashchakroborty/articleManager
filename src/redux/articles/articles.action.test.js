import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
export const mockStore = configureStore(middlewares);
import moxios from "moxios";

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

import {
  clearArticle,
  createArticle,
  getArticles,
  getArticle,
  deleteArticle,
  editArticle,
  incrementClapsInArticle,
} from "./articles.action";

describe("articlesAction", () => {
  it("should create an action to clear articles", () => {
    const expectedAction = {
      type: CLEAR_ARTICLE,
    };
    expect(clearArticle()).toEqual(expectedAction);
  });

  describe("handel requesting all articles", () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it("creates GET_ARTICLES after successfuly fetching articles", () => {
      const articlesMock = [
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
      ];
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: articlesMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: GET_ARTICLES, payload: articlesMock },
      ];

      const store = mockStore({});

      return store.dispatch(getArticles()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("creates ARTICLE_ERROR after failure in getting articles", () => {
      const failureMock = {
        status: 400,
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: failureMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: ARTICLE_ERROR, payload: failureMock },
      ];

      const store = mockStore({});

      return store.dispatch(getArticles()).then(() => {
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        );
      });
    });
  });

  describe("handel creating an article", () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it("creates CREATE_ARTICLE after successfuly creating article", () => {
      const articlesMock = [
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
      ];
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: articlesMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: CREATE_ARTICLE, payload: articlesMock },
      ];

      const store = mockStore({});

      return store.dispatch(createArticle()).then(() => {
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        );
      });
    });

    it("creates ARTICLE_ERROR after failure in creating article", () => {
      const failureMock = {
        status: 400,
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: failureMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: ARTICLE_ERROR, payload: failureMock },
      ];

      const store = mockStore({});

      return store.dispatch(createArticle()).then(() => {
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        );
      });
    });
  });

  describe("handel getting an article", () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it("creates GET_ARTICLE after successfuly getting article", () => {
      const articleMock = {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "1",
        img: "Mock data",
        avatar: "Mock data",
        claps: 0,
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: articleMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: GET_ARTICLE, payload: articleMock },
      ];

      const store = mockStore({});

      return store.dispatch(getArticle()).then(() => {
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        );
      });
    });

    it("creates ARTICLE_ERROR after failure in getting article", () => {
      const failureMock = {
        status: 400,
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: failureMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: ARTICLE_ERROR, payload: failureMock },
      ];

      const store = mockStore({});

      return store.dispatch(getArticle()).then(() => {
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        );
      });
    });
  });

  describe("handel deleting an article", () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it("creates DELETE_ARTICLE after successfuly deleting an article", () => {
      const deletedArticleIdMock = "1234";
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: deletedArticleIdMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: DELETE_ARTICLE, payload: deletedArticleIdMock },
      ];

      const store = mockStore({});

      return store.dispatch(deleteArticle(deletedArticleIdMock)).then(() => {
        expect(store.getActions()).toStrictEqual(
          expect.objectContaining(expectedActions)
        );
      });
    });

    it("creates ARTICLE_ERROR after failure in deleting article", () => {
      const failureMock = {
        status: 400,
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: failureMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: ARTICLE_ERROR, payload: failureMock },
      ];

      const store = mockStore({});

      return store.dispatch(deleteArticle()).then(() => {
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        );
      });
    });
  });

  describe("handel editing an article", () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it("creates EDIT_ARTICLE after successfuly editing article", () => {
      const articleMock = {
        title: "Edit data",
        description: "Edit data",
        author: "Edit data",
        content: "Edit data",
        id: "1",
        img: "Edit data",
        avatar: "Edit data",
        claps: 0,
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: articleMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: EDIT_ARTICLE, payload: articleMock },
      ];

      const store = mockStore({});

      return store.dispatch(editArticle()).then(() => {
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        );
      });
    });

    it("creates ARTICLE_ERROR after failure in editing article", () => {
      const failureMock = {
        status: 400,
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: failureMock,
        });
      });

      const expectedActions = [
        { type: API_LOADING, payload: true },
        { type: ARTICLE_ERROR, payload: failureMock },
      ];

      const store = mockStore({});

      return store.dispatch(editArticle()).then(() => {
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        );
      });
    });
  });

  describe("handel incrementing claps of an article", () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it("creates CLAP_INCREMENT after incrementing claps of an article", () => {
      const articleMock = {
        title: "Edit data",
        description: "Edit data",
        author: "Edit data",
        content: "Edit data",
        id: "1",
        img: "Edit data",
        avatar: "Edit data",
        claps: 0,
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: articleMock,
        });
      });

      const expectedActions = [{ type: CLAP_INCREMENT, payload: articleMock }];

      const store = mockStore({});

      return store.dispatch(incrementClapsInArticle()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("creates ARTICLE_ERROR after failure in incrementing claps of an article", () => {
      const failureMock = {
        status: 400,
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: failureMock,
        });
      });

      const expectedActions = [{ type: ARTICLE_ERROR, payload: failureMock }];

      const store = mockStore({});

      return store.dispatch(incrementClapsInArticle()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
