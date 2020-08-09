import {
  GET_CHATTINGS_ASYNC,
  RESET_STATUS,
  ChattingActions,
} from "data/actions/chatting";
import { User } from "data/middleware/api/apiTypes";
import { API_STATUS } from "data/middleware/api";
import { returnApiResponseData } from "..";

export type InitialState = {
  getChattingsStatus: number;
  chattings: User[] | null;
};

const initialState: InitialState = {
  getChattingsStatus: 0,
  chattings: null,
};

const chattingReducer = (
  state = initialState,
  action: ChattingActions
): InitialState => {
  switch (action.type) {
    case GET_CHATTINGS_ASYNC:
      return returnApiResponseData<InitialState>({
        state,
        statusName: API_STATUS.getChattingsStatus,
        payload: action.payload,
        dataKeyName: "chattings",
        isOnlyData: true,
      });
    case RESET_STATUS:
      return {
        ...state,
        getChattingsStatus: 0,
      };
    default:
      return state;
  }
};

export default chattingReducer;
