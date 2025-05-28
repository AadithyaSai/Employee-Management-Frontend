import { Button } from "..";
import "./pillboxButton.css";

type PillboxButtonType = {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
};

const PillboxButton = ({ icon, text, onClick }: PillboxButtonType) => {
  return (
    <div className="pillbox-container" onClick={onClick}>
      <Button icon={icon} variants="default icon" />
      <p>{text}</p>
    </div>
  );
};

export default PillboxButton;
