import axios, { AxiosError } from "axios";

import { baseURL, authURL } from "./currentURL";
import {
  TokenWithType,
  PagenationRequestType,
  GetChattingsRequestType,
  SearchUserRequestType,
  LoginRequestType,
  RefreshTokenRequestType,
} from "./apiTypes";

export enum API_STATUS {
  getUserListStatus = "getUserListStatus",
  getChattingsStatus = "getChattingsStatus",
  searchUserStatus = "searchUserStatus",
  loginStatus = "loginStatus",
  refreshTokens = "refreshTokens",
}

const authorizationHeader = (accessToken: string) => ({
  Authorization: `Bearer ${accessToken}`,
});

const instanceAxios = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

const authInstanceAxios = axios.create({
  baseURL: authURL,
  headers: { "Content-Type": "application/json" },
});

export const loginApi = async ({ ...request }: LoginRequestType) => {
  const response = await authInstanceAxios.post("/auth", request);

  return [response.data, response.status];
};

export const refreshTokensApi = async ({
  ...request
}: RefreshTokenRequestType) => {
  const response = await authInstanceAxios.put("/auth", null, {
    headers: {
      Authorization: request.refreshToken,
    },
  });

  return [response.data, response.status];
};

export const getUserListApi = async ({
  accessToken,
  ...request
}: TokenWithType<PagenationRequestType>) => {
  const response = await instanceAxios.get("/v5/qna/last-chats", {
    headers: authorizationHeader(accessToken),
    params: {
      offset: request.offset,
    },
  });

  return [response.data, response.status];
};

export const getChattingsApi = async ({
  accessToken,
  ...request
}: TokenWithType<PagenationRequestType & GetChattingsRequestType>) => {
  const response = await instanceAxios.get(
    `/v5/qna/chats/${request.receiptCode}`,
    {
      headers: authorizationHeader(accessToken),
      params: {
        offset: request.offset,
      },
    }
  );

  return [response.data, response.status];
};

export const searchUserApi = async ({
  accessToken,
  ...request
}: TokenWithType<PagenationRequestType & SearchUserRequestType>) => {
  const response = await instanceAxios.get(`/v5/qna/search/${request.name}`, {
    headers: authorizationHeader(accessToken),
    params: {
      offset: request.offset,
    },
  });

  return [response.data, response.status];
};
