"use client";

import { useState } from 'react';

import Button from './ui/Button';

const ErrorSimulator = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  const handleThrow = () => {
    setShouldThrow(true);
  };

  if (shouldThrow) {
    throw new Error('Simulated error triggered by user');
  }
  return (
    <Button
      onClick={handleThrow}
      ariaLabel="Simulate error"
      className="border border-red-500/50 text-red-400  transition-all hover:bg-red-500/10"
    >
      Simulate error
    </Button>
  );
};

export default ErrorSimulator;
