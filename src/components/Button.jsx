import React from "react";

const Button = ({ url, iconClass }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      <i className={iconClass}></i>
    </a>
  );
};

export default Button;
