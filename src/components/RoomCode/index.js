import Image from 'next/image';
import copyImg from '../../../public/img/copy.svg';

import { ButtonCode } from './styles'


export const RoomCode = (props) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <ButtonCode onClick={copyRoomCodeToClipboard}>
      <div>
        <Image src={copyImg} alt="Copy room code" />
      </div>
      <span>{props.code}</span>
    </ButtonCode>
  )
}