import { combineReducers } from "redux";
import { apiData } from "./Reducer";
import { serviceData } from "../serviceReducer";

export default combineReducers({
  apiData,
  serviceData
});
