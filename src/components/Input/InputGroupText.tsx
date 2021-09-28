interface InputGroupTextProps {
  className?: string;
  children: React.ReactNode;
}

export const InputGroupText = ({ className = "", children }: InputGroupTextProps) => {
  return <span className={`input-group-text ${className}`}>{children}</span>;
};
