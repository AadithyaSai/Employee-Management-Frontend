import "./selectInputField.css";

type SelectInputField = {
  label?: string;
  name: string;
  placeholder: string;
  value?: string;
  optionValues: Array<string> | Array<readonly [string, string]>;
  variant?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectInputField = ({
  label,
  name,
  value = "",
  optionValues,
  onChange,
  variant = "default",
  placeholder,
}: SelectInputField) => {
  const valueNamePairs = Array.isArray(optionValues[0])
    ? optionValues
    : optionValues.map((elem) => [elem, elem]);

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
          {valueNamePairs.map((item, idx) => (
            <option key={idx} value={item[0]}>
              {item[1]}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectInputField;
