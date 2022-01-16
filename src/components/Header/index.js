import logoImg from '../../../public/img/logo-header.png'
import Image from 'next/image'

import { HeaderContainer } from "./styles"

export const Header = () => {
  return  (
    <HeaderContainer>
      <div>
        <Image src={logoImg} alt="Friend Secret logo" />
      </div>
    </HeaderContainer>
  )
}