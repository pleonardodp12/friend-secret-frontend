import { useEffect, useState } from 'react'
import {
  PrimaryButton,
  NoContent,
  Header,
  CircleInformation,
  RoomCode,
  ParticipantsList,
  ModalRegisterFriend,
} from '../../src/components'
import drawImage from '../../public/img/draw.svg'
import api from '../../src/services/api'

import {
  MainContainer,
  ContentMiddle,
  WrapperTop
} from '../../src/styles/sharedComponents'

const Secret = ({ participants, hasDrew, isAdmin, id }) => {
  const [localParticipants, setLocalParticipants] = useState([])
  const [link, setLink] = useState('')
  const [registerParticipantModal, setRegisterParticipantModal] = useState(false)

  useEffect(() => {
    setLocalParticipants(participants)
    setLink(`${window.location.origin}${window.location.pathname}`)
  }, [])

  const hasFriends = localParticipants.length > 0
  return (
    <MainContainer>
      <Header />
      <ContentMiddle>
        <WrapperTop>
          <section>
            <h3>Participantes</h3>
            {hasFriends && <CircleInformation text={localParticipants.length}/>}
          </section>
          {!isAdmin && (
            <PrimaryButton
              text="Participar"
              onClick={() => setRegisterParticipantModal(true)}
            />
          )}
        </WrapperTop>
        <ModalRegisterFriend
          show={registerParticipantModal}
          closeModal={() => setRegisterParticipantModal(false)}
        />
        {!hasFriends ? (
          <NoContent />
          ) : (
            <>
              {!isAdmin && (
                <h3>Você foi convidado a participar desse amigo secreto:</h3>
              )}
              <ParticipantsList 
                participants={localParticipants}
                isAdmin={isAdmin}
              />
            </>
            )}
        {isAdmin && (
          <PrimaryButton
            text="Sortear"
            image={drawImage}
          />
        )}
      </ContentMiddle>
      <RoomCode code={link} />
    </MainContainer>
  )
}

export async function getServerSideProps(context) {
  const data = await getSecretById(context.query)
  return {
    props: {
      ...data,
      ...context.query,
    }
  }
}

const getSecretById = async ({ id, adminKey }) => {
  const response = await api.get(`/secret/${id}`, {
    headers: {
      'admin-key': adminKey || ''
    }
  })
  return response.data.result
}

export default Secret