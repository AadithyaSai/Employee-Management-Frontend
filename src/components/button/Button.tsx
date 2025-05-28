import "./Button.css";

type ButtonProps = {
  label?: string;
  type?: "submit" | "reset" | "button" | undefined;
  ref?: React.RefObject<HTMLButtonElement | null>;
  onClick?: () => void;
  variants?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};

const Button = ({
  label,
  onClick,
  variants = "default",
  ref,
  type = "submit",
  icon,
  className,
  disabled,
}: ButtonProps) => {
  const variantClasses = variants
    .split(" ")
    .reduce((acc, curr) => acc + ` button--${curr}`, "");
  return (
    <button
      type={type}
      ref={ref}
      onClick={onClick}
      className={`button ${variantClasses} ` + className}
      disabled={disabled}
    >
      {icon} {label}
    </button>
  );
};

export default Button;
