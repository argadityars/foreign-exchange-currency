export const SelectOption = ({
  className = "",
  children,
  ...props
}: React.DetailedHTMLProps<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>) => {
  return (
    <option className={`form-select ${className}`} {...props}>
      {children}
    </option>
  );
};
