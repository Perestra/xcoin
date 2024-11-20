import styles from './ModalConfirmation.module.scss'

import { Button } from '../Button/Button';
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
import { closeModal } from '@/utils/modalAction';

type Props = {
    action: string;
    confirmOnClick?: React.MouseEventHandler<HTMLButtonElement>;
    cancelOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ModalConfirmation: React.FC<Props> = ({ action, confirmOnClick, cancelOnClick }) => {

  return (
    <dialog className={styles.dialog}>
        <div className={styles.dialog__container}>
            <div className={styles.dialog__header}>
                <Button 
                    color='green'
                    type='button'
                    icon={IoCloseOutline}
                    onClick={() => closeModal()}
                />
            </div>
            <div className={styles.dialog__content}>
                <h3>Tem certeza que gostaria de {action}?</h3>
                <div className={styles.dialog__choice}>
                    <Button 
                        color='green'
                        type='button'
                        text='Confirmar'
                        icon={IoCheckmarkOutline}
                        onClick={confirmOnClick}
                    />
                    <Button 
                        color='red'
                        type='button'
                        text='Cancelar'
                        icon={IoCloseOutline}
                        onClick={cancelOnClick}
                    />
                </div>
            </div>
        </div>
    </dialog>
  )
}
