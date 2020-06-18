import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 12px 12px;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.HR_COLOR};
`;

export const SearchBar = styled.div`
  width: 100%;
  background: ${COLORS.SERVE_COLOR_3};
  border-radius: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  > img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  > input {
    width: 90%;
    height: 30px;
    color: ${COLORS.SERVE_COLOR_4};
    background: transparent;
    border: 0;
    font-size: 14px;
  }
`;
