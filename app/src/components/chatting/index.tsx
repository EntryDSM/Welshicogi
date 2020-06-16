import React, { FC } from "react";

import ChattingHeader from "../chattingHeader";
import ChattingText from "../chattingText";
import ChattingSender from "../chattingSender";
import * as S from "./style/index";

const Chatting: FC = () => {
  return (
    <S.Wrapper>
      <div>
        <S.MessageView>
          <ChattingHeader />
          <ChattingText />
          <ChattingSender />
        </S.MessageView>
      </div>
    </S.Wrapper>
  );
};

export default Chatting;
