import { fork, takeLatest, all } from "redux-saga/effects";

import {
  GET_USER_LIST,
  GET_USER_LIST_ASYNC,
  SEARCH_USER,
  SEARCH_USER_ASYNC,
  LOGIN,
  LOGIN_ASYNC,
  REFRESH_TOKENS,
  REFRESH_TOKENS_ASYNC,
  getUserListType,
  searchUserType,
  loginType,
  refreshTokensType,
  getUserListPayload,
  searchUserPayload,
  loginPayload,
  refreshTokensPayload,
  GetUserList,
  SearchUser,
  Login,
  RefreshTokens,
} from "data/actions/users";
import {
  getUserListApi,
  searchUserApi,
  loginApi,
  refreshTokensApi,
} from "data/middleware/api";
import { sagaEntity } from "data/middleware/sagas";

function* login(action: Login) {
  yield sagaEntity<loginType, loginPayload>({
    action,
    api: loginApi,
    type: LOGIN_ASYNC,
  });
}

function* refreshTokens(action: RefreshTokens) {
  yield sagaEntity<refreshTokensType, refreshTokensPayload>({
    action,
    api: refreshTokensApi,
    type: REFRESH_TOKENS_ASYNC,
  });
}

function* getUserList(action: GetUserList) {
  yield sagaEntity<getUserListType, getUserListPayload>({
    action,
    api: getUserListApi,
    type: GET_USER_LIST_ASYNC,
  });
}

function* searchUser(action: SearchUser) {
  yield sagaEntity<searchUserType, searchUserPayload>({
    action,
    api: searchUserApi,
    type: SEARCH_USER_ASYNC,
  });
}

function* watchGetUserList() {
  yield takeLatest(GET_USER_LIST, getUserList);
}

function* watchRefreshTokens() {
  yield takeLatest(REFRESH_TOKENS, refreshTokens);
}

function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

function* watchSearchUser() {
  yield takeLatest(SEARCH_USER, searchUser);
}

export default function* usersSaga() {
  yield all([
    fork(watchGetUserList),
    fork(watchSearchUser),
    fork(watchLogin),
    fork(watchRefreshTokens),
  ]);
}
