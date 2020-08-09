import {
  ApiPayload,
  User,
  TokenWithType,
  PagenationRequestType,
  GetChattingsRequestType,
} from "middleware/api/apiTypes";

export const GET_CHATTINGS = "GET_CHATTINGS" as const;
export const GET_CHATTINGS_ASYNC = "GET_CHATTINGS_ASYNC" as const;
export const RESET_STATUS = "RESET_STATUS" as const;

export type getChattingType = typeof GET_CHATTINGS | typeof GET_CHATTINGS_ASYNC;
export type getChattingPayload = ApiPayload<User[]> &
  TokenWithType<PagenationRequestType & GetChattingsRequestType>;
export interface GetChatting {
  type: getChattingType;
  payload: getChattingPayload;
}

interface ResetStatus {
  type: typeof RESET_STATUS;
}

export type ChattingActions = GetChatting | ResetStatus;

export const getChattingsAction = (
  payload: TokenWithType<PagenationRequestType & GetChattingsRequestType>
): ChattingActions => ({
  type: GET_CHATTINGS,
  payload,
});

export const resetStatusAction = (): ChattingActions => ({
  type: RESET_STATUS,
});
