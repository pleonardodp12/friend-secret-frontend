import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryLight};
  width: 590px;
  height: 362px;
  position: absolute;
  top: 240px;
  z-index: 1;
  border-radius: 8px;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.1));
`

export const TitleModal = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
`

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.grayDark};
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`