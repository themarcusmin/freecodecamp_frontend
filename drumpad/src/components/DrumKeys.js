import React from "react";

const ButtonItem = props => {
  const { id, onBtnClick, sound } = props;
  return (
    <button id={id} onClick={onBtnClick} value={String(sound)}>
      {id.toUpperCase()}
      <audio src={sound} preload="auto" />
    </button>
  );
};

function DrumKeys(props) {
  const { keys, onBtnClick, sounds } = props;
  // const keys = props.keys;
  // const onBtnClick  = props.onBtnClick;
  // const sounds = props.sounds;
  const AllButtonItems = keys.map(key => (
    <ButtonItem
      key={key.num}
      id={key.letter}
      sound={sounds[key.num]}
      onBtnClick={onBtnClick}
    />
  ));
  return <div className="grid-container">{AllButtonItems}</div>;
}

export default DrumKeys;
