import Image from "next/image"

import noContent from '../../../public/img/no-content.png'

import { Container,  } from "./styles"

export const NoContent = () => {
  return (
    <Container>
      <Image src={noContent} alt="Nenhum amigo" />
      <h4>Nenhum amigo registrado</h4>
      <span>
        Envie o código desta sala para seus amigos e
        quando todos estiverem por aqui. Inicie o sorteio
      </span>
    </Container>
  )
}