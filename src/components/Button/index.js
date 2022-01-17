import { ButtonContainer } from "./styles"

export const Button = (props) => {
  const { cancel, text } = props
  return (
    <ButtonContainer cancel={cancel} {...props}>
      {text}
    </ButtonContainer>
  )
}