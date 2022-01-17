import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { PrimaryButton, Button, Input } from '..'
import { Modal } from './Modal'
import monsterIcon from '../../../public/img/monster.png'
import { TitleModal, Form, ButtonsContainer } from "./styles"
import api from '../../services/api'

export const ModalRegisterFriend = (props) => {
  const router = useRouter()
  const { show, closeModal, registerAction } = props
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onChange = (e, setValue) => {
    const { value } = e.target
    if (value) {
      setValue(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { id } = router.query
    const response = await api.post(`/secret/${id}/participants`, {
      name,
      email
    })

    if (response.data.success) {
      setName('')
      setEmail('')
    }
  }

  return (
    <Modal show={show}>
      <Image src={monsterIcon} />
      <TitleModal>Participar do amigo secreto?</TitleModal>
      <Form onSubmit={handleSubmit}>
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
      <ButtonsContainer>
        <Button text="Canceclar" cancel onClick={closeModal} />
        <PrimaryButton text="Participar" onCLick={registerAction} type="submit" />
      </ButtonsContainer>
      </Form>
    </Modal>
  )
}