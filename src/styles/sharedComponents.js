import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
    background: ${({ theme }) => theme.colors.primary};
    > h2 {
      color: ${({ theme }) => theme.colors.light};
      font-size: 36px;
    }
    > span {
      color: ${({ theme }) => theme.colors.primaryLight};
      font-size: 20px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;
  }

  main {
    flex: 8;
    padding: 0 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

export const ButtonToEnter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 36px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-top: 36px;
  color: ${({ theme }) => theme.colors.secondary};
  div {
    margin-right: 16px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 36px;
`

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  &:last-child() {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

export const ContentMiddle = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  > h3 {
    color: ${({ theme }) => theme.colors.dark }
  }
`

export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  width: 980px;
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 240px;
  }
`
