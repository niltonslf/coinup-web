'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode} from 'react';

type LayoutProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export default function layout({children}: LayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
