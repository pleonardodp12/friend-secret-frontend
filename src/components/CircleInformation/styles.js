import styled from "styled-components";

export const RoundedText = styled.h4`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryLight};
  width: 100px;
  padding: 8px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`