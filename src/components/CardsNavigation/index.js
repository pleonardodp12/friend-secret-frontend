import { useEffect, useState } from 'react'
import { Card } from '../Card'

import { CardNavigationContainer, ContainerDots, Dots } from './styles'

import plusIcon from '../../../public/img/plus-icon.svg'
import giftIcon from '../../../public/img/gift-icon.svg'
import shareIcon from '../../../public/img/share-icon.svg'

const cards = [
  {
    index: 1,
    icon: plusIcon,
    title:"Crie seu sorteio",
    description: "Digite seu nome e e-mail, e crie o seu sorteio de forma fácil e sem complicações."
  },
  {
    index: 2,
    icon: shareIcon,
    title: "Compartilhe o link",
    description: "Compartilhe seu link de sorteio com seus amigos e todos que participarão da brincadeira!"
  },
  {
    index: 3,
    icon: giftIcon,
    title: "Faça o sorteio!!!",
    description: "Quando todos estiverem prontos, realize o sorteio. Cada pessoa receberá por e-mail seu respectivo par."
  }
]

export const CardNavigation = () => {
  const [indexCard, setIndexCard] = useState(1)
  const [showCard, setShowCard] = useState(cards[0])
  const [timeToNextCard, setTimeToNextCard] = useState(3000)

  const handleShowCard = (index) => {
    const currentCard = cards.filter((card) => card.index === index)[0]
    setShowCard(currentCard)
  }

  const resetCardOnClick = (index) => {
    setIndexCard(index)
    setTimeToNextCard(3000)
  }

  const renderDots = () => {
    const cardsDots = cards.map(card => (
      <Dots
        key={card.index}
        onClick={() => resetCardOnClick(card.index)}
        className={indexCard === card.index ? "active-item" : ""}
      />
    ))
    return cardsDots
  }

  useEffect(() => {
    if (indexCard !== cards.length) {
      setTimeout(() => {
        setIndexCard(indexCard + 1)
      }, timeToNextCard)
    } else {
      setTimeout(() => {
        setIndexCard(1)
      }, timeToNextCard)
    }
  }, [indexCard, timeToNextCard])

  useEffect(() => {
    handleShowCard(indexCard)
  }, [indexCard])

  

  return (
    <CardNavigationContainer>
      <Card
        icon={showCard.icon}
        title={showCard.title}
        description={showCard.description}
      />
        
      <ContainerDots>
        {renderDots()}
      </ContainerDots>
    </CardNavigationContainer>
  )
}