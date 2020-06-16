import React, { FC, useCallback } from "react";

import { Logo } from "assets/index";
import * as S from "./style";

const Header: FC = () => {
  const closeTab = useCallback(() => {
    window.close();
  }, []);

  return (
    <S.Wrapper>
      <header>
        <img src={Logo} alt="EntryDSM" />
        <button onClick={closeTab}>창 닫기</button>
      </header>
    </S.Wrapper>
  );
};

export default Header;
