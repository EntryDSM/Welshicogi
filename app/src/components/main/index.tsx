import React, { FC, useEffect, useRef } from "react";

import { getItemToSesstion } from "utils/stroage";
import Login from "../login";
import Chat from "../chat";
import * as S from "./style";

const Main: FC = () => {
  return (
    <S.Wrapper>
      {getItemToSesstion("access_token") ? <Chat /> : <Login />}
    </S.Wrapper>
  );
};

export default Main;
