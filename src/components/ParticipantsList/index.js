import Image from "next/image"
import { useState } from "react"
import { ModalDelete } from ".."
import { useRouter } from 'next/router'
import avatarIcon from '../../../public/img/avatar.svg'
import removeAvatarIcon from '../../../public/img/delete-avatar.svg'
import api from "../../services/api"
import { Container, List, ListItem, Friend, ExcludeButton } from "./styles"

export const ParticipantsList = (props) => {
  const { participants, isAdmin } = props
  const router = useRouter()
  const [deleteParticipantModal, setDeleteParticipantModal] = useState(false)
  const [participantId, setParticipantId] = useState('')

  const actionClick = async () => {
    const { id, adminKey } = router.query
    const response = await api.delete(`/secret/${id}/participants/${participantId}`, {
      headers: {
        'admin-key': adminKey || '',
      }
    })

    if (response.status === 204) {
      setDeleteParticipantModal(false)
    }
  }

  const deleteParticipant = (id) => {
    setDeleteParticipantModal(true)
    setParticipantId(id)
  }

  return (
    <Container>
      <ModalDelete
        show={deleteParticipantModal}
        deleteAction={actionClick}
        closeModal={() => setDeleteParticipantModal(false)}
      />
      <List>
        {participants.map((participant) => (
          <ListItem key={participant.externalId}>
            <Friend>
              <Image src={avatarIcon} />
              {participant.name}
            </Friend>
            
            {isAdmin && (
              <ExcludeButton
                onClick={() => deleteParticipant(participant.externalId)}
              >
                <Image src={removeAvatarIcon} />
              </ExcludeButton>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  )
}