import React from "react";

const VolumeSlider = props => {
  return (
    <div>
      <form action="#">
        <p className="range-field">
          <input
            type="range"
            onChange={props.onChange}
            id="slider"
            min="0"
            max="100"
          />
        </p>
      </form>
    </div>
  );
};

export default VolumeSlider;
