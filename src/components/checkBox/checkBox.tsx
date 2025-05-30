import "./checkBox.css";

type CheckBoxType = {
  name: string;
  label: string;
  checkedState?: boolean;
  onCheckedChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = ({
  name,
  label,
  onCheckedChange,
  checkedState = false,
}: CheckBoxType) => {
  return (
    <label className="checkbox-label">
      <input
        className="checkbox-input"
        type="checkbox"
        name={name}
        onChange={onCheckedChange}
        checked={checkedState}
      />
      <span className="checkbox-text-span">{label}</span>
    </label>
  );
};

export default CheckBox;
