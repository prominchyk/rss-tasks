import type { InputProps } from './Input.types.ts';

const Input: React.FC<InputProps> = ({
  inputType,
  placeholderText,
  value,
  onChange,
}) => {
  return (
    <input
      type={inputType}
      placeholder={placeholderText}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
