import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getChattingsAction, resetStatusAction } from "data/actions/chatting";
import { AppState } from "data/store";
import { InitialState } from "data/reducers/chatting";
import {
  TokenWithType,
  PagenationRequestType,
  GetChattingsRequestType,
} from "data/middleware/api/apiTypes";

export const useChattingRedux = () => {
  const dispatch = useDispatch();
  const chattingStore = useSelector<AppState, InitialState>((state) => ({
    chattings: state.chatting.chattings,
    getChattingsStatus: state.chatting.getChattingsStatus,
  }));

  type getChattings = TokenWithType<
    PagenationRequestType & GetChattingsRequestType
  >;
  const getChattings = useCallback(
    (payload: getChattings) => {
      dispatch(getChattingsAction(payload));
    },
    [dispatch]
  );

  const resetStatus = useCallback(() => {
    dispatch(resetStatusAction());
  }, [dispatch]);

  const chattingReducer = {
    getChattings,
    resetStatus,
  };

  return { chattingStore, chattingReducer };
};
