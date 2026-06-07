import { useState } from 'react';

import Modal from './components/ui/Modal';
import Button from './components/ui/Button';
import ControlledForm from './components/ControlledForm';

type ModalType = 'UNCONTROLLED' | 'CONTROLLED' | null;


const App = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-deep-space text-stardust font-noigrotesk flex flex-col items-center justify-center px-8 py-12 relative overflow-hidden)">
      <h1 className="text-(--text-heading) font-semibold">RSS SCHOOL React 2026 Q2</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Button onClick={() => setActiveModal('UNCONTROLLED')} >
          Open Uncontrolled Modal
        </Button>

        <Button onClick={() => setActiveModal('CONTROLLED')} >
          Open Controlled Modal
        </Button>
      </div>

      <Modal isOpen={activeModal === 'UNCONTROLLED'} onClose={closeModal}>
        <ControlledForm />
      </Modal>

      <Modal isOpen={activeModal === 'CONTROLLED'} onClose={closeModal}>
        <ControlledForm />
      </Modal>
    </div>
  );
};

export default App;
