import { combineReducers } from "redux";

import { API_STATUS } from "middleware/api";

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  let resetState = state;

  if (action.type === "LOG_OUT") {
    resetState = undefined;
  }

  return appReducer(resetState, action);
};

export const returnApiResponseData = <I>(props: {
  state: I;
  statusName: API_STATUS;
  payload: {
    data?: null | object;
    status?: number;
  };
  dataKeyName?: keyof I;
  isOnlyData?: boolean;
}): I => {
  if (props.payload.data === null) {
    return {
      ...props.state,
      [props.statusName]: props.payload.status,
    };
  }

  if (props.isOnlyData) {
    return {
      ...props.state,
      [props.dataKeyName]: props.payload.data,
      [props.statusName]: props.payload.status,
    };
  }

  let returnObject = {};

  for (let i in props.payload.data) {
    returnObject = { ...returnObject, [i]: props.payload.data[i] };
  }

  if (props.dataKeyName) {
    return {
      ...props.state,
      [props.dataKeyName]: { ...returnObject },
      [props.statusName]: props.payload.status,
    };
  }

  return {
    ...props.state,
    ...returnObject,
    [props.statusName]: props.payload.status,
  };
};

export default rootReducer;
