import {ReactNode} from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export const Button = ({children, type = 'button', onClick}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='flex items-center justify-center rounded-lg bg-primary px-14 py-3 text-white hover:bg-primary/80'>
      {children}
    </button>
  );
};
