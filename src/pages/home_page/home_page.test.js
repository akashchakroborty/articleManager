import React from "react";
import { shallow } from "enzyme";
import { HomePage } from "./home_page.component";

describe("CreateOrEditPage component", () => {
  let wrapper;
  let mockGetArticles;
  let useEffect;
  beforeEach(() => {
    mockGetArticles = jest.fn();
    useEffect = jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    const mockProps = {
      articles: [],
      getArticles: mockGetArticles,
    };

    wrapper = shallow(<HomePage {...mockProps} />);
  });

  it("should render HomePage component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
