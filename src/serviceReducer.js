import { SET_CALL_API } from "./redux/constant";

export const serviceData = (data = [], action) => {
  switch (action.type) {
    case SET_CALL_API:
      console.log("Service list from service data", action);
      return [...action.data];

    default:
        return data
  }
};
