import styled from "styled-components";

export const ButtonCode = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  position: relative;
  margin: 24px auto;
  padding: 0;
  
  div {
    background: ${({ theme }) => theme.colors.primary};
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 20px;
    }
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
  }
`