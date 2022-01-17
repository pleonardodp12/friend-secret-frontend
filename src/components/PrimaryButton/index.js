import Image from 'next/image'

import { Container } from "./styles"
import enterIcon from '../../../public/img/enter-icon.svg'

export const PrimaryButton = (props) => {
  const { image, text } = props
  return  ( 
    <Container {...props}>
      <Image src={image ? image : enterIcon} alt="icon" />
      {text}
    </Container>
  )
}