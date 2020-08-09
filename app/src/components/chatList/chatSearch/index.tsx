import React, { FC, useState, useEffect, useCallback } from "react";

import { SearchButton } from "assets/index";
import { getItemToSesstion } from "utils/stroage";
import { useUsersRedux } from "container/users";
import * as S from "./style";

interface OwnProps {
  name: string;
  debounceSearch: string;
  handleName: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChatSearch: FC<OwnProps> = ({ name, debounceSearch, handleName }) => {
  const {
    usersReducer: { searchUser, changeSearchlistToNull },
  } = useUsersRedux();

  useEffect(() => {
    changeSearchlistToNull();
    if (debounceSearch) {
      searchUser({
        accessToken: getItemToSesstion("access_token"),
        offset: 0,
        name: debounceSearch,
      });
    }
  }, [debounceSearch]);

  return (
    <S.Wrapper>
      <S.SearchBar>
        <img src={SearchButton} alt="검색" />
        <input
          value={name}
          onChange={handleName}
          type="text"
          placeholder="검색어를 입력해 주세요"
        />
      </S.SearchBar>
    </S.Wrapper>
  );
};

export default ChatSearch;
