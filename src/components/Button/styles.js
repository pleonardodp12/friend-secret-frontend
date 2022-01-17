import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${({ cancel, theme }) => cancel ? theme.colors.grayLight : theme.colors.red};
  color: ${({ cancel, theme }) => cancel ? theme.colors.grayDark : theme.colors.primaryLight};
  width: 100%;
  min-width: 132px;
  height: 44px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  transition: opacity .2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`