export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText: string;
}
