import {
  ApiPayload,
  ChatListType,
  TokenWithType,
  PagenationRequestType,
  SearchUserRequestType,
  RefreshTokenRequestType,
  RefreshAccessToken,
  LoginRequestType,
  LoginResponseType,
  ChangeListSorted,
  ReadCheck,
} from "middleware/api/apiTypes";

export const REFRESH_TOKENS = "REFRESH_TOKENS" as const;
export const REFRESH_TOKENS_ASYNC = "REFRESH_TOKENS_ASYNC" as const;
export const LOGIN = "LOGIN" as const;
export const LOGIN_ASYNC = "LOGIN_ASYNC" as const;

export const CHANGE_USER_LIST = "CHANGE_USER_LIST" as const;
export const CHANGE_SEARCH_LIST_TO_NULL = "CHANGE_SEARCH_LIST_TO_NULL" as const;
export const UPDATE_IS_READ = "UPDATE_IS_READ" as const;
export const GET_USER_LIST = "GET_USER_LIST" as const;
export const GET_USER_LIST_ASYNC = "GET_USER_LIST_ASYNC" as const;
export const SEARCH_USER = "SEARCH_USER" as const;
export const SEARCH_USER_ASYNC = "SEARCH_USER_ASYNC" as const;
export const RESET_STATUS = "RESET_STATUS" as const;

export type refreshTokensType =
  | typeof REFRESH_TOKENS
  | typeof REFRESH_TOKENS_ASYNC;
export type refreshTokensPayload = ApiPayload<RefreshAccessToken> &
  RefreshTokenRequestType;
export interface RefreshTokens {
  type: refreshTokensType;
  payload: refreshTokensPayload;
}

export type loginType = typeof LOGIN | typeof LOGIN_ASYNC;
export type loginPayload = ApiPayload<LoginResponseType> & LoginRequestType;
export interface Login {
  type: loginType;
  payload: loginPayload;
}

export type getUserListType = typeof GET_USER_LIST | typeof GET_USER_LIST_ASYNC;
export type getUserListPayload = ApiPayload<ChatListType[]> &
  TokenWithType<PagenationRequestType>;
export interface GetUserList {
  type: getUserListType;
  payload: getUserListPayload;
}

export type searchUserType = typeof SEARCH_USER | typeof SEARCH_USER_ASYNC;
export type searchUserPayload = ApiPayload<ChatListType[]> &
  TokenWithType<PagenationRequestType & SearchUserRequestType>;
export interface SearchUser {
  type: searchUserType;
  payload: searchUserPayload;
}

interface ChangeUserlist {
  type: typeof CHANGE_USER_LIST;
  payload: ChangeListSorted;
}

interface UpdateIsRead {
  type: typeof UPDATE_IS_READ;
  payload: ReadCheck;
}

interface ChangeSearchlistToNull {
  type: typeof CHANGE_SEARCH_LIST_TO_NULL;
}

interface ResetStatus {
  type: typeof RESET_STATUS;
}

export type UsersActions =
  | GetUserList
  | Login
  | RefreshTokens
  | SearchUser
  | ChangeUserlist
  | ChangeSearchlistToNull
  | UpdateIsRead
  | ResetStatus;

export const getUserListAction = (
  payload: TokenWithType<PagenationRequestType>
): UsersActions => ({
  type: GET_USER_LIST,
  payload,
});

export const refrehTokensAction = (
  payload: RefreshTokenRequestType
): UsersActions => ({
  type: REFRESH_TOKENS,
  payload,
});

export const loginAction = (payload: LoginRequestType): UsersActions => ({
  type: LOGIN,
  payload,
});

export const searchUserAction = (
  payload: TokenWithType<PagenationRequestType & SearchUserRequestType>
): UsersActions => ({
  type: SEARCH_USER,
  payload,
});

export const changeUserListAction = (
  payload: ChangeListSorted
): UsersActions => ({
  type: CHANGE_USER_LIST,
  payload,
});

export const updateIsCheckAction = (payload: ReadCheck): UsersActions => ({
  type: UPDATE_IS_READ,
  payload,
});

export const changeSearchlistToNullAction = (): UsersActions => ({
  type: CHANGE_SEARCH_LIST_TO_NULL,
});

export const resetStatusAction = (): UsersActions => ({
  type: RESET_STATUS,
});
