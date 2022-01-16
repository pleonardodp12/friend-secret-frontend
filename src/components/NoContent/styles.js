import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 64px;
  img {
    width: 100px;
  }

  > h4 {
    font-size: 20px;
    font-family: 'Poppins';
    font-weight: medium;
    text-align: center;
    color: ${({ theme }) => theme.colors.dark}
  }

  span {
    font-size: 14px;
    width: 100%;
    max-width: 300px;
    text-align: center;
    color: ${({ theme }) => theme.colors.grayDark}
  }
`