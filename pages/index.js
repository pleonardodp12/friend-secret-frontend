import Image from 'next/image'
import { useState } from 'react'
import arrowRight from '../public/img/arrow-right.svg'
import logo from '../public/img/logo.png'
import { Button } from '../src/components/Button'
import { Input } from '../src/components/Input'
import { Separator } from '../src/components/Separator'
import { CardNavigation } from '../src/components/CardsNavigation'

import { Container, ButtonToEnter, FormContainer } from '../src/styles/sharedComponents'

export default function HomePage () {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(showForm => !showForm)
  }

  const handleSubmit = async (e) => {
    e.preventdefault()
    
  }

  return (
    <Container>
      <aside>
        <CardNavigation />
        <h2>Faça um amigo oculto automático.</h2>
        <span>compartilhe com seus amigos e divirta-se!</span>
      </aside>
      <main>
        <Image src={logo} alt="Friend Secret" />
        {showForm ? (
          <FormContainer onSubmit={handleSubmit}>
            <Input
              name="nome"
              placeholder="Digite aqui seu nome"
            />
            <Input
              name="email"
              placeholder="Digite aqui seu email"
            />
            <Separator text="Crie e chame seus amigos" />
            <Button buttonText="Criar evento"/>
          </FormContainer>
        ) : (
          <ButtonToEnter onClick={handleShowForm}>
            Criar evento
            <Image src={arrowRight} alt="enter" />
          </ButtonToEnter>
        )}
        
      </main>
    </Container>
  )
}