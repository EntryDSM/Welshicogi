import React, { FC, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router";

import ChatList from "../chatList";
import Chatting from "../chatting";
import * as S from "./style";

const Main: FC = () => {
  const didMountRef = useRef(false);
  const { email } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    // useEffect의 실행분기를 chatList data에 따라 처리. (데이터가 있을 때 && email이 undefined일 때 => data의 첫번째 아이템의 이메일을 넣음.)
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!email) {
        push(`/t/${"junukim.dev@gmail.com".split(".").join("^")}`);
      }
    }
  }, []);

  return (
    <S.Wrapper>
      <ChatList />
      <Chatting />
    </S.Wrapper>
  );
};

export default Main;
