export const Card = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div className={`card ${className}`} {...props}>
      <div className="card-body">{children}</div>
    </div>
  );
};
