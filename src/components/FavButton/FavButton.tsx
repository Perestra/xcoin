import { useFavoriteCurrency } from '@/hooks/useFavoriteCurrency';
import { Button } from '../Button/Button'
import { PiHeart, PiHeartFill } from "react-icons/pi";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  code: string;
}

export const FavButton: React.FC<Props> = ({ onClick, code }) => {

  const { isCodeInList } = useFavoriteCurrency(code)

  return (
    <Button  
      type='button'
      color='green'
      title='Favoritar'
      icon={!isCodeInList? PiHeart: PiHeartFill}
      onClick={onClick}
    />
  )
}
