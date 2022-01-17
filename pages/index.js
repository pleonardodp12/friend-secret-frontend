import Image from 'next/image'
import { useState } from 'react'
import arrowRight from '../public/img/arrow-right.svg'
import logo from '../public/img/logo.png'
import { PrimaryButton, Input, Separator, CardNavigation } from '../src/components'
import api from '../src/services/api'
import { useRouter } from 'next/router'

import { Container, ButtonToEnter, FormContainer } from '../src/styles/sharedComponents'

export default function HomePage () {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(showForm => !showForm)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await api.post('/secret', {
      name,
      email
    })
    handleResponse(data)
    console.log('data', data)
    setName('')
    setEmail('')
  }

  const handleResponse = (response) => {
    const { success, id, adminKey } = response.data
    if (success) {
      router.push(`/secret/${id}?adminKey=${adminKey}`)
    }
  }

  const onChange = (e, setValue) => {
    const { value } = e.target
    if (value) {
      setValue(value)
    }
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
              value={name}
              onChange={(e) => onChange(e, setName)}
              placeholder="Digite seu nome"
              required
            />
            <Input
              name="email"
              value={email}
              onChange={(e) => onChange(e, setEmail)}
              placeholder="Digite seu email"
              required
            />
            <Separator text="Crie e chame seus amigos" />
            <PrimaryButton text="Criar evento"/>
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