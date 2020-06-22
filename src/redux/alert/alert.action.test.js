import { mockStore } from "../articles/articles.action.test";
import { REMOVE_ALERT, SET_ALERT } from "./alert.types";
import { setAlert } from "./alert.action";

describe("Alert actions", () => {
  it("creates SET_ALERT and REMOVE_ALERT after timeout", () => {
    const mockId = "1234";
    const expectedActions = [
      { type: SET_ALERT, payload: { alertType: null, id: mockId, msg: null } },
      { type: REMOVE_ALERT, payload: mockId },
    ];

    const store = mockStore({});
    jest.useFakeTimers();
    return store.dispatch(setAlert(null, null, 3000, mockId)).then(() => {
      jest.advanceTimersByTime(4000);
      expect(store.getActions()).toStrictEqual(expectedActions);
    });
  });
});
