import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({...props}: InputProps) => {
  return (
    <input
      className='border-1 rounded-md border border-gray-300 p-2'
      {...props}
    />
  );
};
