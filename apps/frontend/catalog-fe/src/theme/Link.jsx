import React from "react";

const Link = ({ to, children }) => {
  return (
    <li>
      <a href={to}>{children}</a>
    </li>
  )
};

export default Link;