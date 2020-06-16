import styled from "styled-components";

import { COLORS } from "src/styles/GlobalStyle";

export const Wrapper = styled.div`
  > section {
    min-width: 514px;
    width: 100%;
    height: calc(100vh - 60px);
    background: #f9f9f9;
    display: flex;
    justify-content: center;
  }
`;
