import { Button } from '../Button/Button'
import { PiHeart, PiHeartFill } from "react-icons/pi";

export const FavButton = () => {
  return (
    <Button  
        type='button'
        color='green'
        text='Favoritar moeda'
        icon={PiHeart}
    />
  )
}
