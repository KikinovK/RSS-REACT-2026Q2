import { useEffect } from 'react';
import { useErrorStore, AppError } from '../../store/useErrorStore';

export const ErrorToastList = () => {
  const { errors, removeError } = useErrorStore();

  if (errors.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-200 flex flex-col gap-3 max-w-md w-full pointer-events-none">
      {errors.map((error) => (
        <ToastItem key={error.id} error={error} onClose={removeError} />
      ))}
    </div>
  );
};

const ToastItem = ({ error, onClose }: { error: AppError; onClose: (id: string) => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(error.id);
    }, 6000);

    return () => clearTimeout(timer);
  }, [error.id, onClose]);

  return (
    <div className="pointer-events-auto bg-red-900 border border-red-500 text-stardust px-4 py-3 rounded-lg shadow-xl flex items-start justify-between gap-3 animate-slide-in backdrop-blur-sm bg-opacity-95">
      <div className="flex gap-2">
        <span className="text-xl">⚠️</span>
        <p className="text-sm font-medium">{error.message}</p>
      </div>
      <button
        onClick={() => onClose(error.id)}
        className="text-stardust hover:text-white font-bold cursor-pointer transition-colors text-xs p-1"
      >
        ✕
      </button>
    </div>
  );
};
