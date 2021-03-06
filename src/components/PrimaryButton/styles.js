import styled from "styled-components";

export const Container = styled.button`
  height: 44px;
  border-radius: 8px;
  max-width: 320px;
  min-width: 147px;
  font: 'Roboto', 500;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 6px;
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