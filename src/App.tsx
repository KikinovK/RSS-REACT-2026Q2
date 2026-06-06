import { useState } from 'react';
import Modal from './components/ui/Modal';
import Button from './components/ui/Button';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-deep-space text-stardust font-noigrotesk flex flex-col items-center justify-center px-8 py-12 relative overflow-hidden)">
      <h1 className="text-(--text-heading) font-semibold">RSS SCHOOL</h1>
      <Button onClick={() => setIsModalOpen(true)} className="mt-4">
        Open Modal
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">
          Hi, I&apos;m a modal window!
        </h2>
        <p className="mb-4 text-muted-text">
          Press the &quot;×&quot; button or click outside the window to close
          it.
        </p>
      </Modal>
    </div>
  );
};

export default App;
