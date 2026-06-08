import { useState } from 'react';

import Modal from './components/ui/Modal';
import Button from './components/ui/Button';
import ControlledForm from './components/ControlledForm';
import { useFormStore } from './store/formStore';
import UnControlledForm from './components/UnControlledForm';
import ListDataForms from './components/ListDataForms';

type ModalType = 'UNCONTROLLED' | 'CONTROLLED' | null;


const App = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const controlledSubmissions = useFormStore((state) => state.controlledSubmissions);
  const uncontrolledSubmissions = useFormStore((state) => state.uncontrolledSubmissions);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-deep-space text-stardust font-noigrotesk flex flex-col items-center justify-center px-8 py-12 relative overflow-hidden)">
      <h1 className="text-(--text-heading) font-semibold">RSS SCHOOL React 2026 Q2</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col items-center p-6">
          <Button onClick={() => setActiveModal('UNCONTROLLED')} >
            Open Uncontrolled Modal
          </Button>
          <ListDataForms submissions={uncontrolledSubmissions} />
        </div>
        <div className="flex flex-col items-center p-6">
          <Button onClick={() => setActiveModal('CONTROLLED')} >
            Open Controlled Modal
          </Button>
          <ListDataForms submissions={controlledSubmissions} />
        </div>
      </div>

      <Modal isOpen={activeModal === 'UNCONTROLLED'} onClose={closeModal}>
        <UnControlledForm />
      </Modal>

      <Modal isOpen={activeModal === 'CONTROLLED'} onClose={closeModal}>
        <ControlledForm />
      </Modal>
    </div>
  );
};

export default App;
