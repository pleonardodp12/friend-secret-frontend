import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PrimaryButton, Button, Input } from '..'
import { Modal } from './Modal'
import monsterIcon from '../../../public/img/monster.png'
import { ContainerModal, TitleModal, Form, ButtonsContainer } from "./styles"

export const ModalRegisterFriend = (props) => {
  const { show, closeModal } = props
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onChange = (e, setValue) => {
    const { value } = e.target
    if (value) {
      setValue(value)
    }
  }

  return (
    <Modal show={show}>
      <Image src={monsterIcon} />
      <TitleModal>Participar do amigo secreto?</TitleModal>
      <Form>
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
      </Form>
      <ButtonsContainer>
        <Button text="Canceclar" cancel onClick={closeModal}/>
        <PrimaryButton text="Participar"/>
      </ButtonsContainer>
    </Modal>
  )
}