import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './index';

interface MockButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

vi.mock('../Button', () => ({
  default: ({
    children,
    onClick,
    className,
    'aria-label': ariaLabel,
  }: MockButtonProps) => (
    <button
      data-testid="mock-button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  ),
}));

describe('Modal', () => {
  const mockOnClose = vi.fn();
  const testContent = 'Test Modal Content';

  const createModalRoot = () => {
    const modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
    return modalRoot;
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  describe('Rendering', () => {
    it('should not render anything when isOpen is false', () => {
      render(
        <Modal isOpen={false} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      expect(screen.queryByText(testContent)).not.toBeInTheDocument();
    });

    it('should render modal content when isOpen is true', () => {
      createModalRoot();
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('should render close button with correct aria-label', () => {
      createModalRoot();
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      const closeButton = screen.getByRole('button', {
        name: 'Close modal window',
      });
      expect(closeButton).toBeInTheDocument();
    });

    it('should render children content', () => {
      createModalRoot();
      const customContent = 'Custom modal content';
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>{customContent}</p>
        </Modal>
      );

      expect(screen.getByText(customContent)).toBeInTheDocument();
    });
  });

  describe('Modal Root Container', () => {
    it('should log error and return null when modal-root is not found', () => {
      const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      expect(errorSpy).toHaveBeenCalledWith(
        'Container #modal-root was not found in the DOM tree.'
      );
      expect(screen.queryByText(testContent)).not.toBeInTheDocument();

      errorSpy.mockRestore();
    });

    it('should find and use existing modal-root element', () => {
      const modalRoot = createModalRoot();
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      expect(modalRoot.querySelector('.fixed')).toBeInTheDocument();
      expect(screen.getByText(testContent)).toBeInTheDocument();
    });
  });

  describe('Close Functionality', () => {
    it('should call onClose when close button is clicked', async () => {
      createModalRoot();
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      const closeButton = screen.getByRole('button', {
        name: 'Close modal window',
      });
      await userEvent.click(closeButton);

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should call onClose when backdrop is clicked', async () => {
      createModalRoot();
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      const backdrop = document.querySelector('.fixed.inset-0');
      expect(backdrop).toBeInTheDocument();

      await userEvent.click(backdrop as Element);

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should NOT call onClose when modal content is clicked', async () => {
      createModalRoot();
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      const modalContent = document.querySelector('.relative.w-full');
      expect(modalContent).toBeInTheDocument();

      await userEvent.click(modalContent as Element);

      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe('Keyboard Events', () => {
    it('should call onClose when Escape key is pressed', async () => {
      createModalRoot();
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      await userEvent.keyboard('{Escape}');

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should NOT call onClose when other keys are pressed', async () => {
      createModalRoot();
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard('a');
      await userEvent.keyboard('{Tab}');

      expect(mockOnClose).not.toHaveBeenCalled();
    });

    it('should NOT call onClose when Escape is pressed and isOpen is false', async () => {
      createModalRoot();
      render(
        <Modal isOpen={false} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      await userEvent.keyboard('{Escape}');

      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe('Event Listener Management', () => {
    it('should add keydown event listener when modal opens', () => {
      createModalRoot();
      const addEventListenerSpy = vi.spyOn(window, 'addEventListener');

      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );

      addEventListenerSpy.mockRestore();
    });

    it('should remove keydown event listener on unmount', () => {
      createModalRoot();
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

      const { unmount } = render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );
      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );

      removeEventListenerSpy.mockRestore();
    });

    it('should remove keydown event listener when modal closes', () => {
      createModalRoot();
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

      const { rerender } = render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );
      rerender(
        <Modal isOpen={false} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );

      removeEventListenerSpy.mockRestore();
    });

    it('should not add event listener when modal is initially closed', () => {
      createModalRoot();
      const addEventListenerSpy = vi.spyOn(window, 'addEventListener');

      render(
        <Modal isOpen={false} onClose={mockOnClose}>
          {testContent}
        </Modal>
      );

      expect(addEventListenerSpy).not.toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );

      addEventListenerSpy.mockRestore();
    });
  });

  describe('Event Propagation', () => {
    it('should stop propagation of click events on modal content', async () => {
      createModalRoot();
      const onCloseSpy = vi.fn();
      render(
        <Modal isOpen={true} onClose={onCloseSpy}>
          {testContent}
        </Modal>
      );

      const modalContent = document.querySelector('.relative.w-full');
      expect(modalContent).toBeInTheDocument();

      await userEvent.click(modalContent as Element);

      expect(onCloseSpy).not.toHaveBeenCalled();
    });
  });

  describe('Multiple Modals', () => {
    it('should only close the modal that is open when Escape is pressed', async () => {
      createModalRoot();
      const onClose1 = vi.fn();
      const onClose2 = vi.fn();

      render(
        <>
          <Modal isOpen={true} onClose={onClose1}>
            Modal 1
          </Modal>
          <Modal isOpen={false} onClose={onClose2}>
            Modal 2
          </Modal>
        </>
      );

      await userEvent.keyboard('{Escape}');

      expect(onClose1).toHaveBeenCalledTimes(1);
      expect(onClose2).not.toHaveBeenCalled();
    });
  });
});
