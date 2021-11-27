import { SHOW_ALERT, HIDE_ALERT } from "./types";

const initialState = {
  visible: false,
};

export const alert = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        visible: true,
      };
    case HIDE_ALERT:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
