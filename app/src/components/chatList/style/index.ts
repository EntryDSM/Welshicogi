import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.div`
  width: 30%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const ChatUser = styled.div<{ isActive?: boolean }>`
  margin: 4px 0;
  width: 100%;
  height: 60px;
  border-radius: 12px;
  background: ${({ isActive }) => isActive && COLORS.SERVE_COLOR_5};
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 13px;
      color: ${COLORS.SERVE_COLOR_4};

      &.message {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre;
        width: 180px;
      }

      > span {
        font-size: 16px;
        color: ${COLORS.SERVE_COLOR_2};
        margin-right: 5px;
      }
    }

    .notReadMark {
      width: 7px;
      height: 7px;
      background: ${COLORS.MAIN_COLOR_1};
      border-radius: 5px;
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
