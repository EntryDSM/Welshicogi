import React, { FC } from "react";

import ChatList from "../chatList";
import Chatting from "../chatting";
import * as S from "./style";

const Main: FC = () => {
  return (
    <S.Wrapper>
      <ChatList />
      <Chatting />
    </S.Wrapper>
  );
};

export default Main;
