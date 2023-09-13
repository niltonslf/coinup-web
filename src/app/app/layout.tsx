'use client';

import {SessionProvider} from 'next-auth/react';
import {ReactNode} from 'react';

type LayoutProps = {
  children: ReactNode;
  session: any;
};

export default function layout({children, session}: LayoutProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
