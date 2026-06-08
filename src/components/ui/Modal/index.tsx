import { type ReactNode, type MouseEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';

import CloseIcon from '../../../assets/icons/close.svg?react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    console.error('Container #modal-root was not found in the DOM tree.');
    return null;
  }

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-stardust"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md transform overflow-hidden rounded-(--radius-cards) bg-midnight-core border border-white/10 p-6 text-left align-middle shadow-xl transition-all"
        onClick={handleContentClick}
      >
        <Button
          variant="icon"
          className="absolute top-0.5 right-0.5 text-guidepost-green "
          onClick={onClose}
          aria-label="Close modal window"
        >
          <CloseIcon />
        </Button>
        <div className="mt-2">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
