import React from "react";

function Hello({ color, name, isSpecial = false }) {
  return (
    <div style={{ color }}>
      {" "}
      {isSpecial && <b>*</b>}
      {name}
    </div>
  );
}

export default Hello;
