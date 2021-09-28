import { InputGroupText } from "./InputGroupText";

interface InputGroupProps {
  className?: string;
  children: React.ReactNode;
}

const InputGroup = ({ className = "", children }: InputGroupProps) => {
  return <div className={`input-group ${className}`}>{children}</div>;
};

InputGroup.Text = InputGroupText;

export default InputGroup;