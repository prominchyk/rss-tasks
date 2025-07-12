import type { ButtonProps } from './Button.types.ts';

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  buttonText,
}): React.ReactElement => {
  return (
    <button type={type} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
