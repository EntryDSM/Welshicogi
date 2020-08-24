import React, { FC, useEffect, useRef } from "react";

import { authentication } from "middleware/api/socket";
import { getItemToSesstion } from "utils/stroage";
import Login from "../login";
import Chat from "../chat";
import * as S from "./style";

const Main: FC = () => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (getItemToSesstion("access_token")) {
        authentication({
          token: getItemToSesstion("access_token"),
          type: "admin",
        });
      }
    }
  }, [didMountRef]);

  return (
    <S.Wrapper>
      {getItemToSesstion("access_token") ? <Chat /> : <Login />}
    </S.Wrapper>
  );
};

export default Main;
