import Image from "next/image"
import { CardContainer } from "./styles"

export const Card = (props) => {
  return (
    <CardContainer>
      <Image src={props.icon} alt="Icon card" />
      <h2>{props.title}</h2>
      <span>{props.description}</span>
    </CardContainer>
  )
}