'use client';

import { Session } from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import {ReactNode} from 'react';

type LayoutProps = {
  children: ReactNode;
  session: Session;
};

export default function layout({children, session}: LayoutProps) {
  console.log({session});

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
