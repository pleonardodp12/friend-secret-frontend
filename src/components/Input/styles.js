import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  input {
    height: 50px;
    border-radius: 8px;
    font-size: 18px;
    margin: 4px 0;
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`