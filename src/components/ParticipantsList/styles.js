import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 64px;
`

export const List = styled.ol`
  max-width: 80%;
  padding: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  `

export const ListItem = styled.li`
  width: 100%;
  padding: 4px;
  margin-bottom: 16px;
  gap: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Friend = styled.div`
  color: ${({ theme }) => theme.colors.grayDark};
  display: flex;
  align-items: center;
  user-select: none;
  gap: 4px;
`

export const ExcludeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  width: 24px;
  cursor: pointer;
  transition: opacity .2s;
  &:hover {
    opacity: 0.6;
  }
`
