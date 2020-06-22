import React from "react";
import { shallow } from "enzyme";
import NotFound from "./notfound.component";

describe("NotFound component", () => {
  let wrapper;
  let mockHistory;

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      history: mockHistory,
    };

    wrapper = shallow(<NotFound {...mockProps} />);
  });

  it("should render NotFound component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when NotFoundContainer is clicked", () => {
    wrapper.find("NotFoundContainer").simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
  });
});
