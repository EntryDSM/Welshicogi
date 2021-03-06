import { put, call, all } from "redux-saga/effects";

import chattingSaga from "./chattingSaga";
import usersSaga from "./usersSaga";
import { AxiosError } from "axios";

interface SagaEntityParams<ActionT, PayloadT> {
  action: {
    type: ActionT;
    payload?: PayloadT;
  };
  api: (payload?: any) => Promise<any[]>;
  type: string;
}

export function* sagaEntity<ActionT, PayloadT = object>({
  action,
  api,
  type,
}: SagaEntityParams<ActionT, PayloadT>) {
  try {
    const response = yield call(api, action.payload);

    yield put({ type, payload: { data: response[0], status: response[1] } });
  } catch (_err) {
    const error: AxiosError = _err;

    if (error.response.status === 401) {
      alert("다시 로그인 후 이용해 주세요.");
      yield put({ type: "LOG_OUT" });
      window.location.href = "/";
    } else {
      yield put({
        payload: { data: null, status: error.response.status },
        type,
      });
    }
  }
}

export default function* rootSaga() {
  yield all([call(chattingSaga), call(usersSaga)]);
}
