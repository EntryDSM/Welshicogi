import { fork, takeLatest, all } from "redux-saga/effects";

import {
  GET_CHATTINGS,
  GET_CHATTINGS_ASYNC,
  getChattingType,
  getChattingPayload,
  GetChatting,
} from "data/actions/chatting";
import { getChattingsApi } from "data/middleware/api";
import { sagaEntity } from "data/middleware/sagas";

function* getChatting(action: GetChatting) {
  yield sagaEntity<getChattingType, getChattingPayload>({
    action,
    api: getChattingsApi,
    type: GET_CHATTINGS_ASYNC,
  });
}

function* watchGetChatting() {
  yield takeLatest(GET_CHATTINGS, getChatting);
}

export default function* chattingSaga() {
  yield all([fork(watchGetChatting)]);
}
