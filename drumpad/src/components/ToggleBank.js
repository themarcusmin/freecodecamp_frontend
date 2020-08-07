import React from "react";

const ToggleBank = props => {
  return (
    <div className="switch">
      <label>
        Off
        <input
          checked={props.checked_bank}
          onChange={props.onChange}
          type="checkbox"
        />
        <span className="lever"></span>
        On
      </label>
    </div>
  );
};

export default ToggleBank;
