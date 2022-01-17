import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PrimaryButton, Button, Input } from '..'
import monsterIcon from '../../../public/img/monster.png'
import { ContainerModal, TitleModal, Form, ButtonsContainer } from "./styles"

export const Modal = (props) => {
  const { show, children } = props
  const [isVisible, setIsVisible] = useState(show)

  const openModal = () => {
    setIsVisible(true)
  }

  const closeModal = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    if (show) {
      openModal()
    } else {
      closeModal()
    }
  }, [show])


  return (
    <>
    {isVisible && (
      <ContainerModal>
        {children}
      </ContainerModal>
    )}
    </>
  )
}