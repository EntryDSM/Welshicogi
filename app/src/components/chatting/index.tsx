import React, { FC, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { decodingEmail } from "utils/convert";
import ChattingHeader from "./chattingHeader";
import ChattingText from "./chattingText";
import ChattingSender from "./chattingSender";
import * as S from "./style/index";

const Chatting: FC = () => {
  const { email } = useParams();
  const { state } = useLocation<{ name: string; receipt_code: number }>();

  useEffect(() => {
    if (email) {
      console.log(decodingEmail(email));
    }
  }, [email]);

  return (
    <S.Wrapper>
      <div>
        <S.MessageView>
          <ChattingHeader
            name={state?.name || "유저가 없습니다."}
            receipt_code={state?.receipt_code || 0}
          />
          <ChattingText email={email} receiptCode={state?.receipt_code || 0} />
          <ChattingSender />
        </S.MessageView>
      </div>
    </S.Wrapper>
  );
};

export default Chatting;
