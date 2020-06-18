import React, { FC, useState, useCallback, useEffect } from "react";
import { useParams, useHistory } from "react-router";

import type { User } from "data/middleware/api/apiTypes";
import { convertTimeStempToNowDate } from "utils/convert";
import InfinityScroll from "components/infinityScroll";
import ChatSearch from "./chatSearch";
import * as S from "./style";

const ChatList: FC = () => {
  const { email } = useParams();
  const { push } = useHistory();
  const [data, setData] = useState<User[] | null>(
    // null
    [
      {
        qna_id: 1,
        admin_email: "admin1@example.com",
        user_email: "user1@example.com",
        to: "admin",
        content: "안녕하세요",
        created_at: "2020-06-17T15:12:40.000Z",
      },
      {
        qna_id: 2,
        admin_email: "junukim.dev@gmail.com",
        user_email: "junukim.dev@gmail.com",
        to: "student",
        content:
          "반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니반갑습니",
        created_at: "2020-06-17T23:13:40.000Z",
      },
      {
        qna_id: 3,
        admin_email: "admin2@example.com",
        user_email: "user2@example.com",
        to: "admin",
        content: "안녕하세요",
        created_at: "2020-06-17T05:15:40.000Z",
      },
    ]
  );
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = useCallback(async () => {
    if (data === null) {
      setHasMore(false);
      return;
    }
    if (data.length > 50) setHasMore(false);

    await setData([
      ...data,
      {
        qna_id: page,
        admin_email: "admin3@example.com",
        user_email: "user3@example.com",
        to: "admin",
        content: "안녕하세요",
        created_at: "2020-06-03T05:15:40.000Z",
      },
    ]);
    await setPage(page + 1);
  }, [data, page]);

  const pushToUser = useCallback((email: string) => {
    push(`/t/${email}`);
  }, []);

  return (
    <S.Wrapper>
      <ChatSearch />
      <InfinityScroll loadMore={fetchMoreData} hasMore={hasMore}>
        {data === null || data.length === 0 ? (
          <S.EmptyData>대화할 대상이 존재하지 않습니다.</S.EmptyData>
        ) : (
          data.map((v) => (
            <S.ChatUser
              key={v.qna_id}
              onClick={() => pushToUser(v.user_email)}
              isActive={email === v.user_email}
            >
              <div>
                <p>
                  <span>김재훈</span>123456
                </p>
                <div className="notReadMark" />
              </div>
              <div>
                <p className="message">
                  김준우김준우김준우김준우김준우김준우김준우 선배 나오세요
                </p>
                <p>{convertTimeStempToNowDate(v.created_at)}</p>
              </div>
            </S.ChatUser>
          ))
        )}
      </InfinityScroll>
    </S.Wrapper>
  );
};

export default ChatList;
