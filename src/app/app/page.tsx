'use client';

import {useSession} from 'next-auth/react';

export default function App() {
  const {data, status} = useSession();
  console.log({data, status});

  return (
    <main className='flex h-full w-full items-center justify-center bg-gray-400'>
      {data?.user?.name}
    </main>
  );
}
