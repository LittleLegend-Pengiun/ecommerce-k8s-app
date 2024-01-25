import React from "react";

const Link = ({ to, children }) => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <a href={to}>{children}</a>
    </li>
  )
};

export default Link;