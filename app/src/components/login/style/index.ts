import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 240px;
  }

  > input {
    box-sizing: border-box;
    padding: 6px;
    width: 240px;
    height: 22px;
    font-size: 14px;
    border: 1px solid ${COLORS.MAIN_COLOR_1};
    border-radius: 0;
    color: ${COLORS.SERVE_COLOR_2};
    margin-top: 16px;
  }

  > button {
    width: 240px;
    height: 32px;
    font-size: 14px;
    text-align: center;
    border: 1px solid ${COLORS.MAIN_COLOR_1};
    color: ${COLORS.MAIN_COLOR_1};
    margin-top: 40px;
    transition: 0.2s;

    &:hover {
      background: ${COLORS.MAIN_COLOR_1};
      color: ${COLORS.MAIN_COLOR_2};
    }
  }
`;
