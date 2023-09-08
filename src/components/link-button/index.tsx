import Link from 'next/link';
import {ReactNode} from 'react';

type ButtonProps = {
  children: ReactNode;
  href: string;
};

export const LinkButton = ({children, href}: ButtonProps) => {
  return (
    <Link
      href={href}
      className='flex items-center justify-center rounded-lg bg-primary px-14 py-3 text-white'>
      {children}
    </Link>
  );
};
