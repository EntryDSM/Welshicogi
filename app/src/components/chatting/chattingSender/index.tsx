import React, { FC, useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";

import { decodingEmail } from "utils/convert";
import { sendMessage } from "middleware/api/socket";
import { SendMark } from "assets/index";
import * as S from "./style/index";

const ChattingSender: FC = () => {
  const { email } = useParams();
  const [message, setMessage] = useState("");

  const send = useCallback(async () => {
    if (message === "") {
      return;
    }
    await sendMessage({ content: message, userEmail: decodingEmail(email) });
    await setMessage("");
  }, [message]);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        send();
      }
    },
    [send]
  );

  const messageHandler = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(value);
    },
    []
  );

  useEffect(() => {
    if (email) {
      setMessage("");
    }
  }, [email]);

  return (
    <S.Wrapper>
      <TextareaAutosize
        value={message}
        onChange={messageHandler}
        onKeyPress={handleKeyPress}
        maxRows={4}
        placeholder="메세지를 입력해 주세요"
      />
      <button onClick={send}>
        <img src={SendMark} alt="전송" />
      </button>
    </S.Wrapper>
  );
};

export default ChattingSender;
