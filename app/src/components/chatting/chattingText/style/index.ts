import styled, { css } from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
  display: flex;

  > div {
    width: 100%;
    height: 100%;
  }
`;

export const WarningMeassage = styled.p`
  font-size: 20px;
  color: red;
`;

export const ChatBubble = styled.div<{ isAdmin: boolean }>`
  width: 100%;
  margin-top: 4px;
  display: flex;
  justify-content: ${({ isAdmin }) => (isAdmin ? "flex-start" : "flex-end")};

  > p {
    margin: 0;
    width: fit-content;
    word-break: break-all;
    max-width: 600px;
    min-height: 36px;
    padding: 10px 12px;
    box-sizing: border-box;
    position: relative;
    font-size: 14px;
    border-radius: ${COLORS.DEFAULT_RADIUS};
    border-bottom-left-radius: ${({ isAdmin }) => isAdmin && 0};
    border-bottom-right-radius: ${({ isAdmin }) => !isAdmin && 0};
    background: ${({ isAdmin }) =>
      isAdmin ? COLORS.SERVE_COLOR_1 : COLORS.MAIN_COLOR_1};
    color: ${({ isAdmin }) =>
      isAdmin ? COLORS.SERVE_COLOR_2 : COLORS.MAIN_COLOR_2};

    > span {
      display: none;
      font-size: 11px;
      color: #ffffff;
      background: #000000;
      padding: 5px;
      position: absolute;
      border-radius: 2px;
      top: 50%;
      transform: translateY(-50%);
      left: ${({ isAdmin }) => !isAdmin && "-145px"};
      right: ${({ isAdmin }) => isAdmin && "-145px"};

      ${({ isAdmin }) =>
        isAdmin
          ? css`
              &:after {
                right: 100%;
                top: 50%;
                border: solid transparent;
                content: " ";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
                border-color: rgba(0, 0, 0, 0);
                border-right-color: #000;
                border-width: 6px;
                margin-top: -6px;
              }
            `
          : css`
              &:after {
                left: 100%;
                top: 50%;
                border: solid transparent;
                content: " ";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
                border-color: rgba(0, 0, 0, 0);
                border-left-color: #000;
                border-width: 6px;
                margin-top: -6px;
              }
            `}
    }

    &:hover {
      > span {
        display: block;
      }
    }
  }
`;

export const EmptyData = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  color: ${COLORS.MAIN_COLOR_1};
`;
