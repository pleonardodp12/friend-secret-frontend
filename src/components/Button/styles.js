import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 50px;
  border-radius: 9px;
  width: 100%;
  max-width: 320px;
  font: 'Roboto', 500;
  font-size: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s;
  margin: 16px 0;
  div {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`