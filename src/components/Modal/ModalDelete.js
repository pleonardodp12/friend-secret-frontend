import Image from 'next/image'
import { Button } from '..'
import deleteIcon from '../../../public/img/delete.svg'
import { Modal } from './Modal'
import { TitleModal, Text, ButtonsContainer } from "./styles"

export const ModalDelete = (props) => {
  const { show, closeModal, deleteAction } = props
  return (
    <Modal show={show}>
      <Image src={deleteIcon} />
      <TitleModal>Excluir participante</TitleModal>
      <Text>Tem certeza que você deseja excluir este participante?</Text>
      <ButtonsContainer>
        <Button text="Canceclar" cancel onClick={closeModal} />
        <Button text="Sim, excluir" onClick={deleteAction} />
      </ButtonsContainer>
    </Modal>
  )
}