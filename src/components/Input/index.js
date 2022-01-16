import { InputContainer } from "./styles"

export const Input = (props) => {
  const { placeholder, errors, name } = props
  return (
    <InputContainer {...props} >
      <input name={name} placeholder={placeholder} />
      <span>{errors}</span>
    </InputContainer>
  )
}