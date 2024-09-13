import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button
      id="loginButton"
      className="bg-primary-subtle text-black"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
