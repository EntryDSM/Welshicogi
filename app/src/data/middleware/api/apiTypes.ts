export interface User {
  qna_id: number;
  admin_email: string;
  to: "admin" | "student";
  content: string;
  created_at: string;
  is_read: number;
  user_receipt_code: number;
}

export interface SendContent {
  content: string;
  userEmail: string;
}

export interface ChangeListSorted {
  receiptCode: number;
  content: string;
}

export interface LoginRequestType {
  email: string;
  password: string;
}

export interface RefreshTokenRequestType {
  refreshToken: string;
}
export interface RefreshAccessToken {
  access_token: string;
}

export interface LoginResponseType {
  access_token: string;
  refresh_token: string;
}

export interface ReadCheck {
  userEmail: string;
}

export interface SocketError {
  status: number;
  code: string;
}

export type ChatListType = User & {
  user: {
    email: string;
    receipt_code: number;
    name: string;
  };
};

export interface GetChattingsRequestType {
  receiptCode: number;
}

export interface SearchUserRequestType {
  name: string;
}

export interface PagenationRequestType {
  offset: number;
}

export interface ApiPayload<T = null> {
  data?: T;
  status?: number;
}

export interface AccessToken {
  accessToken: string;
}

export type TokenWithType<T> = AccessToken & T;
