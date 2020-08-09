import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getUserListAction,
  searchUserAction,
  resetStatusAction,
  refrehTokensAction,
  changeUserListAction,
  changeSearchlistToNullAction,
  updateIsCheckAction,
  loginAction,
} from "data/actions/users";
import { AppState } from "data/store";
import { InitialState } from "data/reducers/users";
import {
  TokenWithType,
  PagenationRequestType,
  SearchUserRequestType,
  LoginRequestType,
  RefreshTokenRequestType,
  ChangeListSorted,
  ReadCheck,
} from "data/middleware/api/apiTypes";

export const useUsersRedux = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector<AppState, InitialState>((state) => ({
    getUserListStatus: state.users.getUserListStatus,
    searchUserStatus: state.users.searchUserStatus,
    loginStatus: state.users.loginStatus,
    refreshTokensStatus: state.users.refreshTokensStatus,
    userList: state.users.userList,
    isHasMore: state.users.isHasMore,
    searchList: state.users.searchList,
  }));

  const getUserList = useCallback(
    (payload: TokenWithType<PagenationRequestType>) => {
      dispatch(getUserListAction(payload));
    },
    [dispatch]
  );

  const searchUser = useCallback(
    (payload: TokenWithType<PagenationRequestType & SearchUserRequestType>) => {
      dispatch(searchUserAction(payload));
    },
    [dispatch]
  );

  const changeUserList = useCallback(
    (payload: ChangeListSorted) => {
      dispatch(changeUserListAction(payload));
    },
    [dispatch]
  );

  const refreshTokens = useCallback(
    (payload: RefreshTokenRequestType) => {
      dispatch(refrehTokensAction(payload));
    },
    [dispatch]
  );

  const login = useCallback(
    (payload: LoginRequestType) => {
      dispatch(loginAction(payload));
    },
    [dispatch]
  );

  const updateIsCheck = useCallback(
    (payload: ReadCheck) => {
      dispatch(updateIsCheckAction(payload));
    },
    [dispatch]
  );

  const changeSearchlistToNull = useCallback(() => {
    dispatch(changeSearchlistToNullAction());
  }, [dispatch]);

  const resetStatus = useCallback(() => {
    dispatch(resetStatusAction());
  }, [dispatch]);

  const usersReducer = {
    getUserList,
    searchUser,
    resetStatus,
    login,
    changeUserList,
    refreshTokens,
    changeSearchlistToNull,
    updateIsCheck,
  };

  return { usersStore, usersReducer };
};
