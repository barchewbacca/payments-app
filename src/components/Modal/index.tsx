import React from 'react';
import ReactModal from 'react-modal';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  contentLabel: string;
}

ReactModal.setAppElement(document.getElementById('root')!);

const Modal = ({ children, onClose, ...rest }: Props) => (
  <ReactModal
    {...rest}
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    <div className={styles.modalBody}>{children}</div>
    <button className={styles.closeButton} onClick={onClose} aria-label="Close">
      Close
    </button>
  </ReactModal>
);

export default Modal;
