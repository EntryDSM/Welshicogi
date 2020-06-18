import React, { FC } from "react";

import { SearchButton } from "assets/index";
import * as S from "./style";

const ChatSearch: FC = () => {
  return (
    <S.Wrapper>
      <S.SearchBar>
        <img src={SearchButton} alt="검색" />
        <input type="text" placeholder="검색어를 입력해 주세요" />
      </S.SearchBar>
    </S.Wrapper>
  );
};

export default ChatSearch;
