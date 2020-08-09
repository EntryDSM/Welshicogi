import React, { FC, useCallback } from "react";

import { Logo } from "assets/index";
import * as S from "./style";

const Header: FC = () => {
  return (
    <S.Wrapper>
      <header>
        <img src={Logo} alt="EntryDSM" />
      </header>
    </S.Wrapper>
  );
};

export default Header;
