import type { Metadata } from 'next';

import '../index.css';

export const metadata: Metadata = {
  title: 'RSS React 2026',
  description: 'Migrated to Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default RootLayout;
