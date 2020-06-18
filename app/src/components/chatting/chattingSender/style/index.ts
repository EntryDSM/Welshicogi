import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 30px;
  max-height: 60px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > textarea {
    border: none;
    width: 94%;
    min-height: 30px;
    max-height: 60px;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 9px 16px;
    resize: none;
    background-color: ${COLORS.SERVE_COLOR_3};
    color: ${COLORS.SERVE_COLOR_4};
    font-size: 12px;

    &:focus {
      outline: none;
    }
  }

  > button {
    all: unset;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.2s;

    &:active {
      opacity: 0.2;
      transition-duration: 0s;
    }

    > img {
      width: 24px;
      height: 24px;
    }
  }
`;
