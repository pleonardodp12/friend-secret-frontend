import styled from "styled-components";

export const SeparatorContainer = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 320px;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray};
    margin-left: 16px;
  }
`