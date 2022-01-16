import Image from 'next/image'
import { Header } from '../../src/components/Header'
import { NoContent } from '../../src/components/NoContent'
import { RoomCode } from '../../src/components/RoomCode'

import { MainContainer, ContentMiddle, ParticipantsList } from '../../src/styles/sharedComponents'

const Secret = ({ participants, hasDrew, isAdmin }) => {
  return (
    <MainContainer>
      <Header />
      <ContentMiddle>
        <h3>Participantes</h3>
        {!participants.length ? (
          <NoContent />
        ) : (
          <ParticipantsList />
        )}
      </ContentMiddle>
      <RoomCode code="aaaaaau9827u312873" />
    </MainContainer>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      participants: [],
      hasDrew: false,
      isAdmin: true,
    }
  }
}

export default Secret