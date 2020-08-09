import React, { FC, useEffect } from "react";
import { useParams, useHistory } from "react-router";

import { useUsersRedux } from "container/users";
import { encodingEmail } from "utils/convert";
import ChatList from "../chatList";
import Chatting from "../chatting";
import * as S from "./style";

const Chat: FC = () => {
  const { email } = useParams();
  const { push } = useHistory();
  const {
    usersStore: { userList },
  } = useUsersRedux();

  useEffect(() => {
    if (!email && userList !== null && userList?.length !== 0) {
      push(`/t/${encodingEmail(userList[0].user.email)}`, {
        name: userList[0].user.name,
        receipt_code: userList[0].user.receipt_code,
      });
    }
  }, [userList]);

  return (
    <S.Wrapper>
      <ChatList />
      <Chatting />
    </S.Wrapper>
  );
};

export default Chat;
