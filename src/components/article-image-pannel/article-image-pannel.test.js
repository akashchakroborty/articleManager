import React from "react";
import { shallow } from "enzyme";
import ArticleImagePannel from "./article-image-pannel.component";
import {
  getReadimageContainerStyle,
  readimageContainerStyle,
  readMoreImageContainerStyle,
} from "./article-image-pannel.styles";

describe("ArticleImagePannel component", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      isArticleRead: true,
    };

    wrapper = shallow(<ArticleImagePannel {...mockProps} />);
  });

  it("should render ArticleImagePannel component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain following styles when isArticleRead is true", () => {
    expect(
      getReadimageContainerStyle({
        isArticleRead: wrapper.props().isArticleRead,
      })
    ).toEqual(readimageContainerStyle);
  });
  it("should contain following styles when isArticleReadMore is true", () => {
    const newMockProps = {
      isArticleReadMore: true,
    };

    const newWrapper = shallow(<ArticleImagePannel {...newMockProps} />);
    expect(
      getReadimageContainerStyle({
        isArticleReadMore: newWrapper.props().isArticleReadMore,
      })
    ).toEqual(readMoreImageContainerStyle);
  });
});
