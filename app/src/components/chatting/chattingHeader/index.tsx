import React, { FC } from "react";

import * as S from "./style/index";

interface OwnProps {
  name: string;
  receipt_code: number;
}

const ChattingHeader: FC<OwnProps> = ({ name, receipt_code }) => {
  return (
    <S.Wrapper>
      <p>
        {name} <span>{receipt_code}</span>
      </p>
    </S.Wrapper>
  );
};

export default ChattingHeader;
