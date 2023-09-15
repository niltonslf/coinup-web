'use client';

import {Header} from '@/components';
import {SessionProvider} from 'next-auth/react';
import {ReactNode} from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function layout({children}: LayoutProps) {
  return (
    <SessionProvider>
      <main className='flex h-screen w-screen flex-col'>
        <Header />
        {children}
      </main>
    </SessionProvider>
  );
}
