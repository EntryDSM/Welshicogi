import React, { FC, useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router";

import { useUsersRedux } from "container/users";
import { encodingEmail } from "utils/convert";
import { readCheck, listenOnReceiveReadCheck } from "middleware/api/socket";
import useDebounce from "utils/hooks/useDebounce";
import ChatSearch from "./chatSearch";
import UserScroll from "./UserScroll";
import SearchScroll from "./SearchScroll";
import * as S from "./style";

const ChatList: FC = () => {
  const [name, setName] = useState("");
  const debounceSearch = useDebounce(name, 400);
  const { push } = useHistory();
  const {
    usersReducer: { changeSearchlistToNull, updateIsCheck },
  } = useUsersRedux();

  const pushToUser = useCallback(
    (data: { email: string; name: string; receipt_code: number }) => {
      const { email, ...request } = data;
      setName("");
      readCheck({ userEmail: email });
      changeSearchlistToNull();
      push(`/t/${encodingEmail(email)}`, request);
    },
    []
  );

  const handleName = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setName(value);
    },
    []
  );

  useEffect(() => {
    listenOnReceiveReadCheck((userEmail) => {
      updateIsCheck({ userEmail });
    });
  }, []);

  return (
    <S.Wrapper>
      <ChatSearch
        name={name}
        debounceSearch={debounceSearch}
        handleName={handleName}
      />
      {debounceSearch ? (
        <SearchScroll pushToUser={pushToUser} name={name} />
      ) : (
        <UserScroll pushToUser={pushToUser} />
      )}
    </S.Wrapper>
  );
};

export default ChatList;
