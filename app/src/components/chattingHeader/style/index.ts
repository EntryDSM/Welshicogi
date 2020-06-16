import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid ${COLORS.HR_COLOR};

  > p {
    font-size: 22px;
    color: ${COLORS.SERVE_COLOR_2};
    text-align: center;

    > span {
      font-size: 18px;
      color: ${COLORS.SERVE_COLOR_4};
      margin-left: 6px;
    }
  }
`;
