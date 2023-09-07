import Link from 'next/link';
import {ReactNode} from 'react';

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({children}: ButtonProps) => {
  return (
    <Link
      href='#'
      className='bg-primary flex items-center justify-center rounded-lg px-14 py-4 text-white'>
      {children}
    </Link>
  );
};
