export interface InputProps {
  inputType: string;
  value: string | number;
  placeholderText: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
