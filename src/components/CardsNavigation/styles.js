import styled from "styled-components";

export const CardNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContainerDots = styled.div`
margin-top: 32px;
  width: 100%;
  max-width: 235px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const Dots = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.light};
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  transition: opacity .2s;
  &:hover {
    opacity: 0.7;
  }
  cursor: pointer;
  &.active-item {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`