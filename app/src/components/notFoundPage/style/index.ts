import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Warning = styled.p`
  margin-top: 40px;
  font-size: 102px;
  color: ${COLORS.MAIN_COLOR_1};
`;

export const Button = styled(Link)`
  border: 1px solid ${COLORS.MAIN_COLOR_1};
  cursor: pointer;
  padding: 12px;
  font-size: 14px;
  margin-top: 12px;
  color: ${COLORS.MAIN_COLOR_1};
`;
