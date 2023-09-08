import {InputHTMLAttributes, forwardRef} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
}

export const Input = forwardRef(
  ({className, isInvalid = false, ...props}: InputProps, ref: any) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`border-1 rounded-md border  p-2 ${className ?? ''} ${
          isInvalid ? 'border-red-400' : 'border-gray-300'
        }`}
      />
    );
  },
);
