import React from "react";
import DrumPad from "./DrumPad";

const DrumMachine = () => {
  return (
    <div className="DrumMachine">
      <div className="DrumMachineInner">
        <DrumPad />
      </div>
    </div>
  );
};

export default DrumMachine;
