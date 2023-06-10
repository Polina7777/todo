import "./Button.css";

export function Button({ className, handleClick, type, buttonName }) {
  return (
    <button className={className} type={type} onClick={handleClick}>
      {buttonName}
    </button>
  );
}
export default Button
