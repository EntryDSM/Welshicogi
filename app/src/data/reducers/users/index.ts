import {
  GET_USER_LIST_ASYNC,
  CHANGE_USER_LIST,
  SEARCH_USER_ASYNC,
  LOGIN_ASYNC,
  REFRESH_TOKENS_ASYNC,
  CHANGE_SEARCH_LIST_TO_NULL,
  UPDATE_IS_READ,
  RESET_STATUS,
  UsersActions,
} from "data/actions/users";
import { setItemToSesstion, setItemToLocal } from "utils/stroage";
import { ChatListType } from "data/middleware/api/apiTypes";

export type InitialState = {
  getUserListStatus: number;
  searchUserStatus: number;
  loginStatus: number;
  refreshTokensStatus: number;
  userList: ChatListType[] | null;
  isHasMore: boolean;
  searchList: ChatListType[] | null;
};

const initialState: InitialState = {
  getUserListStatus: 0,
  searchUserStatus: 0,
  refreshTokensStatus: 0,
  loginStatus: 0,
  searchList: null,
  userList: null,
  isHasMore: true,
};

const usersReducer = (
  state = initialState,
  action: UsersActions
): InitialState => {
  switch (action.type) {
    case UPDATE_IS_READ:
      return {
        ...state,
        userList: state.userList.map((v) =>
          v.user.email === action.payload.userEmail
            ? { ...v, is_read: 1 }
            : { ...v }
        ),
      };
    case GET_USER_LIST_ASYNC:
      return {
        ...state,
        getUserListStatus: action.payload.status,
        userList:
          state.userList === null
            ? action.payload.data
            : state.userList.concat(action.payload.data),
        isHasMore: action.payload.data.length !== 0,
      };
    case SEARCH_USER_ASYNC:
      return {
        ...state,
        searchUserStatus: action.payload.status,
        searchList:
          state.searchList === null
            ? action.payload.data
            : state.searchList.concat(action.payload.data),
        isHasMore: action.payload.data.length !== 0,
      };
    case CHANGE_USER_LIST:
      if (state.userList[0].user.receipt_code === action.payload.receiptCode) {
        const newArray = [...state.userList];
        newArray[0] = {
          ...newArray[0],
          content: action.payload.content,
        };

        return {
          ...state,
          userList: newArray,
        };
      }

      const moveItem = state.userList.find(
        (v) => v.user.receipt_code === action.payload.receiptCode
      );
      const newArray = state.userList.filter(
        (v) => v.user.receipt_code !== action.payload.receiptCode
      );

      newArray.splice(0, 0, {
        ...moveItem,
        content: action.payload.content,
        is_read: 0,
      });

      return {
        ...state,
        userList: newArray,
      };
    case CHANGE_SEARCH_LIST_TO_NULL:
      return {
        ...state,
        searchList: null,
      };
    case LOGIN_ASYNC:
      setItemToSesstion("access_token", action.payload.data.access_token || "");
      setItemToLocal("refresh_token", action.payload.data.refresh_token || "");

      return {
        ...state,
        loginStatus: action.payload.status,
      };
    case REFRESH_TOKENS_ASYNC:
      setItemToSesstion("access_token", action.payload.data.access_token || "");

      return {
        ...state,
        refreshTokensStatus: action.payload.status,
      };
    case RESET_STATUS:
      return {
        ...state,
        getUserListStatus: 0,
        searchUserStatus: 0,
        loginStatus: 0,
      };
    default:
      return state;
  }
};

export default usersReducer;
