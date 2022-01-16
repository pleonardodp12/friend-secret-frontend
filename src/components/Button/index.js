import Image from 'next/image'

import { ButtonContainer } from "./styles"
import enterIcon from '../../../public/img/enter-icon.svg'

export const Button = (props) => {
  const { image, buttonText } = props
  return  ( 
    <ButtonContainer {...props}>
      <Image src={image ? image : enterIcon} alt="icon" />
      {buttonText}
    </ButtonContainer>
  )
}