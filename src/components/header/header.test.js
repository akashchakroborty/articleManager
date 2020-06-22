import React from "react";
import { shallow } from "enzyme";
import { Header } from "./header.component";

describe("Header component", () => {
  let wrapper;
  let mockClearArticle;

  beforeEach(() => {
    mockClearArticle = jest.fn();

    const mockProps = {
      clearArticle: mockClearArticle,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render Header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call clearArticle method when create article link is clicked", () => {
    wrapper.find("OptionLink").simulate("click");
    expect(mockClearArticle).toHaveBeenCalled();
  });
});
