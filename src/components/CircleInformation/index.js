import { RoundedText } from './styles'

export const CircleInformation = (props) => {
  const { text } = props
  return (
    <RoundedText>{text} amigos</RoundedText>
  )
}