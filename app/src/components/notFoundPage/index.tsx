import React, { FC } from "react";

import * as S from "./style";

const NotFoundPage: FC = () => {
  return (
    <S.Wrapper>
      <S.Warning>404</S.Warning>
      <S.Button to="/">돌아가기</S.Button>
    </S.Wrapper>
  );
};

export default NotFoundPage;
