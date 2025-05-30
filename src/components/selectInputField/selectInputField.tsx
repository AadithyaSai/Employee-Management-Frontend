import "./selectInputField.css";

type SelectInputField = {
  label?: string;
  name: string;
  placeholder: string;
  value?: string;
  values: Array<string>;
  variant?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectInputField = ({
  label,
  name,
  value = "",
  values,
  onChange,
  variant = "default",
  placeholder,
}: SelectInputField) => {
  return (
    <div
      className={`select-input-field-div select-input-field-div--${variant}`}
    >
      <label>
        {label}
        <select name={name} required onChange={onChange} value={value}>
          <option value="" hidden disabled>
            {placeholder}
          </option>
          {values.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectInputField;
