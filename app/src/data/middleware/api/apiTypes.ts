export interface User {
  qna_id: number;
  admin_email: string;
  user_email: string;
  to: "admin" | "student";
  content: string;
  created_at: string;
}

export interface PagenationRequestType {
  size: number;
  page: number;
  sort: string;
}

export interface ApiPayload<T = null> {
  data?: T;
  status?: number;
}

export interface AccessToken {
  accessToken: string;
}

export type TokenWithType<T> = AccessToken & T;
