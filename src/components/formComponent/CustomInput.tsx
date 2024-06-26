import { InputHTMLAttributes, RefObject } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  props?: InputHTMLAttributes<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement | null>;
}

const CustomInput = ({ props, ref }: CustomInputProps) => {
  return <input ref={ref} {...props} />;
};

export default CustomInput;
