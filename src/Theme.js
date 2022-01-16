import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#00C284',
    primaryLight: '#F8F8F8',
    secondary: '#0D7856',
    light: '#FFFFFF',
    red: '#E73F5D',
    gray: '#A8A8B3',
    grayDark: '#737380',
    grayLight: '#DBDCDD',
    dark: '#29292E'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme