import { SET_ALERT, REMOVE_ALERT } from "./alert.types";
import alertReducer from "./alert.reducer";

const initialState = [];

describe("alertReducer", () => {
  it("should return initial state", () => {
    expect(alertReducer(undefined, {})).toEqual(initialState);
  });

  it("should return alert when set alert is fired", () => {
    const mockAlert = {
      msg: "mock",
      alertType: "mock",
      id: "1234",
    };

    const mockPrevState = [
      {
        msg: "mock",
        alertType: "mock",
        id: "124",
      },
    ];
    expect(
      alertReducer(mockPrevState, {
        type: SET_ALERT,
        payload: mockAlert,
      })[mockPrevState.length]
    ).toStrictEqual(mockAlert);
  });

  it("should clear alert when remove alert is fired", () => {
    const mockPrevState = [
      {
        msg: "mock",
        alertType: "mock",
        id: "124",
      },
      {
        msg: "mock",
        alertType: "mock",
        id: "1234",
      },
    ];
    expect(
      alertReducer(mockPrevState, {
        type: REMOVE_ALERT,
        payload: "124",
      }).includes((alert) => alert.id === "124")
    ).toBe(false);
  });
});
