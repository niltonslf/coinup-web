'use client';

import {Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import {ReactNode} from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function layout({children}: LayoutProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
