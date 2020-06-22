import React from "react";
import { shallow } from "enzyme";
import ArticlePannel from "./article-pannel.component";
import {
  getWidthFull,
  WidthFull,
  articleBodyReadStyle,
  getArticlePannelBodyStyles,
  getDisplayNone,
  displayNone,
  getDisplayBlock,
  displayBlock,
} from "./article-pannel.styles";

describe("ArticlePannel component", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      isArticleRead: true,
    };

    wrapper = shallow(<ArticlePannel {...mockProps} />);
  });

  it("should render ArticlePannel component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain following styles when isArticleRead is true", () => {
    expect(
      getWidthFull({ isArticleRead: wrapper.props().isArticleRead })
    ).toEqual(WidthFull);
    expect(
      getArticlePannelBodyStyles({
        isArticleRead: wrapper.props().isArticleRead,
      })
    ).toEqual(articleBodyReadStyle);
    expect(
      getDisplayNone({
        isArticleRead: wrapper.props().isArticleRead,
      })
    ).toEqual(displayNone);
    expect(
      getDisplayBlock({
        isArticleRead: wrapper.props().isArticleRead,
      })
    ).toEqual(displayBlock);
  });
});
