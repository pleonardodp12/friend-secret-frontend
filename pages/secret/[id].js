import { Button } from '../../src/components/Button'
import { CircleInformation } from '../../src/components/CircleInformation'
import { Header } from '../../src/components/Header'
import { NoContent } from '../../src/components/NoContent'
import { RoomCode } from '../../src/components/RoomCode'
import { ParticipantsList } from '../../src/components/ParticipantsList'
import api from '../../src/services/api'

import {
  MainContainer,
  ContentMiddle,
  WrapperTop
} from '../../src/styles/sharedComponents'

const Secret = ({ participants, hasDrew, isAdmin, id }) => {

  const hasFriends = participants.length > 0
  return (
    <MainContainer>
      <Header />
      <ContentMiddle>
        <WrapperTop>
          <section>
            <h3>Participantes</h3>
            {!hasFriends && <CircleInformation text={participants.length}/>}
          </section>
          <Button
            buttonText="Participar"
          />
        </WrapperTop>
        {!hasFriends ? (
          <NoContent />
        ) : (
          <ParticipantsList  participants={participants} isAdmin={isAdmin}/>
        )}
      </ContentMiddle>
      <RoomCode code={`http://localhost:3000/secret/${id}`} />
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