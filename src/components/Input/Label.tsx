export const Label = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>) => {
  return <label className={`form-label ${className}`} {...props}>{children}</label>;
};
