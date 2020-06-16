import React, { FC, useState, useCallback } from "react";

import * as S from "./style/index";

const ChattingHeader: FC = () => {
  return (
    <S.Wrapper>
      <p>
        김준우 <span>123456</span>
      </p>
    </S.Wrapper>
  );
};

export default ChattingHeader;
