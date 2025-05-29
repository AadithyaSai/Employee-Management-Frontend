import "./pillboxText.css";

type PillboxTextType = {
  text: string;
  color?: "yellow" | "red" | "green" | "none";
};

const PillboxText = ({ text, color }: PillboxTextType) => {
  return <div className={`rounded--pill pillbox-color--${color}`}>{text}</div>;
};

export default PillboxText;
