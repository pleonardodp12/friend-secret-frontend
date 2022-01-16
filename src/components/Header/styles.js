import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 16px;
  border-bottom: 1px solid #e2e2e2;

  div {
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 45px;
    }
  }
`