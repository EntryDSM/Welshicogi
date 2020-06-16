import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";
import { downToUp, fadeIn } from "./animation";

export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  border-left: 1px solid ${COLORS.HR_COLOR};

  > div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 16px;
  }
`;

export const MessageView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
