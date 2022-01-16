import Image from "next/image"
import avatarIcon from '../../../public/img/avatar.svg'
import removeAvatarIcon from '../../../public/img/delete-avatar.svg'
import { Container, List, ListItem, Friend, ExcludeButton } from "./styles"

export const ParticipantsList = (props) => {
  const { participants, isAdmin } = props
  console.log(participants[0].name)
  return (
    <Container>
      <List>
        {participants.map((participant) => (
          <ListItem key={participant.externalId}>
            <Friend>
              <Image src={avatarIcon} />
              {participant.name}
            </Friend>
            {isAdmin && (
              <ExcludeButton>
                <Image src={removeAvatarIcon} />
              </ExcludeButton>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  )
}