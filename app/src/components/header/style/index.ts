import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: ${COLORS.DEFAULT_SHADOW};
  display: flex;
  align-items: center;
  justify-content: center;

  > header {
    width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 93px;
      height: 29px;
    }

    > button {
      width: 88px;
      height: 26px;
      border-radius: 17px;
      background: ${COLORS.MAIN_COLOR_1};
      color: ${COLORS.MAIN_COLOR_2};
      font-size: 16px;
      text-align: center;
    }
  }
`;
