import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  width: 100%;
  max-width: 235px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px 4px rgba(0,0,0, 0.08);
  h2 {
    color: ${({ theme }) => theme.colors.secondary}
  }
  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary}
  }
`