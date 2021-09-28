import { SelectOption } from "./SelectOption";

const SelectInput = ({
  className = "",
  children,
  ...props
}: React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>) => {
  return (
    <select className={`form-select ${className}`} {...props}>
      {children}
    </select>
  );
};

SelectInput.Option = SelectOption;

export default SelectInput;
