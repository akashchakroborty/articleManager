import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./alert.types";

export const setAlert = (msg, alertType, timeout = 3000, alertId) => async (
  dispatch
) => {
  const id = alertId || uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    timeout
  );
};
