import "./Button.css";

// export interface ButtonProps {
//   className?: string;
//   handleClick?: () => void;
//   type?: "button" | "submit" | "reset" | undefined;
//   buttonName?: string;
// }
export function Button({ className, handleClick, type, buttonName }) {
  return (
    <button className={className} type={type} onClick={handleClick}>
      {buttonName}
    </button>
  );
}
export default Button
