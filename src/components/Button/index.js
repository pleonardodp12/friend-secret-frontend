import Image from 'next/image'

import { ButtonContainer } from "./styles"
import enterIcon from '../../../public/img/enter-icon.svg'

export const Button = (props) => {
  return  ( 
    <ButtonContainer {...props}>
      <Image src={props.image ? props.image : enterIcon} alt="icon" />
      {props.buttonText}
    </ButtonContainer>
  )
}