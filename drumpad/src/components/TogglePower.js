import React from "react";

const TogglePower = props => {
  return (
    <div className="switch">
      <label>
        Off
        <input
          checked={props.checked_power}
          onChange={props.onChange}
          type="checkbox"
          id="powerlever"
        />
        <span className="lever"></span>
        On
      </label>
    </div>
  );
};

export default TogglePower;
