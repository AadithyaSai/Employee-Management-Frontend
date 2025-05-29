import { useEffect } from "react";
import { Button } from "..";
import "./dialogBox.css";

type DialogBoxProps = {
  title: string;
  description: string;
  ref: React.RefObject<HTMLDialogElement | null>;
  onResponse: (response: string) => void;
};

const DialogBox = ({ title, description, ref, onResponse }: DialogBoxProps) => {
  useEffect(() => {
    const dialog = ref.current!;
    const handleConfirm = () => {
      onResponse(dialog.returnValue);
    };

    dialog.addEventListener("close", handleConfirm);
    return () => dialog.removeEventListener("close", handleConfirm);
  }, [ref, onResponse]);

  return (
    <dialog className="dialog-box-body" ref={ref}>
      <form className="dialog-box-form" method="dialog">
        <div
          className="cancel-button"
          onClick={() => ref.current?.close("cancel")}
        >
          &times;
        </div>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <div className="buttons">
          <Button
            variants="default"
            label="Confirm"
            onClick={() => ref.current?.close("confirm")}
          />
          <Button
            variants="outline"
            label="Cancel"
            onClick={() => ref.current?.close("cancel")}
          />
        </div>
      </form>
    </dialog>
  );
};

export default DialogBox;
