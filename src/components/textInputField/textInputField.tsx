import "./textInputField.css";

type TextInputFieldProps = {
  placeholder?: string;
  label: string;
  variants?: string;
  type?: string;
  value?: string;
  name: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLInputElement | null>;
  endAdornment?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInputField = ({
  placeholder,
  label,
  variants = "default",
  value,
  name,
  type,
  disabled,
  onChange,
  endAdornment,
  style,
  ref,
}: TextInputFieldProps) => {
  return (
    <div className={`text-input-field-div`} style={style}>
      <label className={`label--${variants}`}>
        <input
          type={type || "text"}
          name={name}
          className={`input--${variants}`}
          onChange={onChange}
          placeholder={variants === "default" ? placeholder : ""}
          value={value}
          ref={ref}
          required
          disabled={disabled}
        />
        <span>{label}</span>
        <div className="end-adornment">{endAdornment}</div>
      </label>
    </div>
  );
};

export default TextInputField;
