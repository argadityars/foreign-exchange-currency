export const Button = ({
  className, children, ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button className={`btn ${className}`} type="submit" {...props}>
      {children}
    </button>
  );
};
