import React, { FC, useState, useCallback, useEffect, useRef } from "react";

import type { User } from "data/middleware/api/apiTypes";
import { useChattingRedux } from "container/chatting";
import { useUsersRedux } from "container/users";
import { getItemToSesstion } from "utils/stroage";
import { convertTimeStempToSentence, decodingEmail } from "utils/convert";
import {
  listenOnReceiveMessage,
  listenOnError,
} from "data/middleware/api/socket";
import InfinityScroll from "components/infinityScroll";
import * as S from "./style/index";

interface OwnProps {
  email: string;
  receiptCode: number;
}

const ChattingText: FC<OwnProps> = ({ email, receiptCode }) => {
  const infinityScrollRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<User[] | null>(null);
  const [newChat, setNewChat] = useState<User | null>(null);
  const [warningMeassage, setWarningMeassage] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const {
    usersReducer: { changeUserList },
  } = useUsersRedux();
  const {
    chattingStore: { getChattingsStatus, chattings },
    chattingReducer: { getChattings, resetStatus },
  } = useChattingRedux();

  const fetchMoreData = useCallback(async () => {
    if (isLoading || !hasMore || receiptCode === 0) {
      return;
    }

    setIsScroll(true);
    setIsLoading(true);
    getChattings({
      accessToken: getItemToSesstion("access_token"),
      offset: data?.length || 0,
      receiptCode,
    });
  }, [data, isLoading, hasMore, receiptCode]);

  useEffect(() => {
    if (getChattingsStatus === 200) {
      if (chattings.length === 0) {
        setHasMore(false);
      }
      setIsLoading(false);
      setData([...chattings, ...(data || [])]);
    }

    resetStatus();
  }, [getChattingsStatus]);

  useEffect(() => {
    if (newChat !== null) {
      if (Number(newChat.user_receipt_code) === receiptCode) {
        setData((v) => v?.concat(newChat) || [newChat]);
      }
      changeUserList({
        content: newChat.content,
        receiptCode: Number(newChat.user_receipt_code),
      });
    }
  }, [newChat]);

  useEffect(() => {
    listenOnReceiveMessage((chatData: User) => {
      setIsScroll(false);
      setNewChat(chatData);
    });
    listenOnError((error) => {
      switch (error.code) {
        case "c01":
          setWarningMeassage("API가 존재하지 않습니다.");
          break;
        case "c02":
          setWarningMeassage("파라미터 값이 비어있습니다");
          break;
        case "a01":
          setWarningMeassage("유저 정보가 옳바르지 않습니다.");
          break;
        case "a02":
          setWarningMeassage("확인할 수 없는 유저입니다.");
          break;
        case "d01":
          setWarningMeassage("데이터베이스에 저장하는데 문제가 생겼습니다.");
          break;
        default:
          setWarningMeassage("X");
      }
    });
  }, []);

  useEffect(() => {
    if (!isScroll) {
      infinityScrollRef.current?.scrollTo(
        0,
        infinityScrollRef.current?.scrollHeight
      );
    }
  }, [data]);

  useEffect(() => {
    if (email) {
      setData(null);
      setNewChat(null);
      setWarningMeassage("");
      setHasMore(true);
      setIsLoading(false);
      setIsScroll(false);
    }
  }, [email]);

  return (
    <S.Wrapper ref={infinityScrollRef}>
      {warningMeassage ? (
        <S.WarningMeassage>{warningMeassage}</S.WarningMeassage>
      ) : (
        <InfinityScroll
          loadMore={fetchMoreData}
          hasMore={hasMore}
          isReverse={true}
        >
          {data === null || data.length === 0 ? (
            <S.EmptyData>대화 내용이 존재하지 않습니다.</S.EmptyData>
          ) : (
            data.map((v) => (
              <S.ChatBubble key={v.qna_id} isAdmin={v.to === "admin"}>
                <p>
                  {v.content}
                  <span>{convertTimeStempToSentence(v.created_at)}</span>
                </p>
              </S.ChatBubble>
            ))
          )}
        </InfinityScroll>
      )}
    </S.Wrapper>
  );
};

export default ChattingText;
