import React from "react";

function Checkbox({ id, label }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} value="false" />
    </div>
  );
}

export { Checkbox };