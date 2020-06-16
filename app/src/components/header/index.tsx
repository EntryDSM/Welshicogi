import React, { FC } from "react";

import { Logo } from "assets/index";
import * as S from "./style";

const Header: FC = () => {
  return (
    <S.Wrapper>
      <header>
        <img src={Logo} alt="EntryDSM" />
        <button>돌아가기</button>
      </header>
    </S.Wrapper>
  );
};

export default Header;
