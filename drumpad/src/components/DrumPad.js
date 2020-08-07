import React, { Component } from "react";
import $ from "jquery";
import DrumKeys from "./DrumKeys";
import DrumSettings from "./DrumSettings";
import Heater_1 from "./sounds/Heater-1.mp3";
import Heater_2 from "./sounds/Heater-2.mp3";
import Heater_3 from "./sounds/Heater-3.mp3";
import Heater_4 from "./sounds/Heater-4.mp3";
import Clap from "./sounds/Clap.mp3";
import Open_HH from "./sounds/Open_HH.mp3";
import Kick_n_Hat from "./sounds/Kick_n_Hat.mp3";
import Kick from "./sounds/Kick.mp3";
import Closed_HH from "./sounds/Closed_HH.mp3";
import Chord_1 from "./sounds/Chord_1.mp3";
import Chord_2 from "./sounds/Chord_2.mp3";
import Chord_3 from "./sounds/Chord_3.mp3";
import Shaker from "./sounds/Shaker.mp3";
import Dry_Ohh from "./sounds/Dry_Ohh.mp3";
import Bld_H1 from "./sounds/Bld_H1.mp3";
import Punchy_Kick from "./sounds/Punchy_Kick.mp3";
import Side_Stick from "./sounds/Side_Stick.mp3";
import Snare from "./sounds/Snare.mp3";

class DrumPad extends Component {
  state = {
    label: "",
    volume: 50,
    soundList: [],
    keys: [
      { num: 0, letter: "q" },
      { num: 1, letter: "w" },
      { num: 2, letter: "e" },
      { num: 3, letter: "a" },
      { num: 4, letter: "s" },
      { num: 5, letter: "d" },
      { num: 6, letter: "z" },
      { num: 7, letter: "x" },
      { num: 8, letter: "c" }
    ]
  };
  handleKeyDown = e => {
    // console.log("keycode is ", e.keyCode);
    // console.log(e.key);
    if ([81, 87, 69, 65, 83, 68, 90, 88, 67].includes(e.keyCode)) {
      document.getElementById(e.key.toLowerCase()).click();
      $(`#${e.key}`).addClass("active");
    }
  };
  handleKeyUp = e => {
    if ([81, 87, 69, 65, 83, 68, 90, 88, 67].includes(e.keyCode)) {
      $(`#${e.key}`).removeClass("active");
    }
  };
  // onKeyClick: if power is on, update label and play sound
  handleClick = e => {
    // console.log(e.target.value);
    let audiofile = e.target.querySelector("audio");
    if (audiofile.muted === false) {
      this.setState({
        label: e.target.value.slice(14, -13)
      });
    }
    audiofile.volume = this.state.volume / 100;
    audiofile.pause();
    audiofile.currentTime = 0;
    audiofile.play();
  };
  // Two Arrays of Playlists
  BankOFF = [
    Heater_1,
    Heater_2,
    Heater_3,
    Heater_4,
    Clap,
    Open_HH,
    Kick_n_Hat,
    Kick,
    Closed_HH
  ];
  BankON = [
    Chord_1,
    Chord_2,
    Chord_3,
    Shaker,
    Dry_Ohh,
    Bld_H1,
    Punchy_Kick,
    Side_Stick,
    Snare
  ];
  // Power ON / OFF with muted property
  handlePower = status => {
    // console.log("Power status is ", status);
    this.setState({
      label: ""
    });
    let allaudio = document.querySelectorAll("audio");
    if (status === false) {
      allaudio.forEach(sound => (sound.muted = true));
    } else {
      allaudio.forEach(sound => (sound.muted = false));
    }
  };
  // Bank ON / OFF to switch playlist
  handleBank = status => {
    // console.log("Bank status: ", status);
    if (status === true) {
      this.setState({
        label: "",
        soundList: [...this.BankON]
      });
    } else {
      this.setState({
        label: "",
        soundList: [...this.BankOFF]
      });
    }
  };
  // Adjusy Volume
  handleVolume = volume => {
    // console.log(volume);
    this.setState({
      volume
    });
  };
  componentDidMount() {
    this.setState({
      soundList: [...this.BankOFF]
    });
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  render() {
    return (
      <div className="row">
        <div className="col l8 firstColumn">
          <div>
            <DrumKeys
              onBtnClick={this.handleClick}
              keys={this.state.keys}
              sounds={this.state.soundList}
            />
          </div>
        </div>
        <div className="col l4 secondColumn">
          <DrumSettings
            power={this.handlePower}
            bank={this.handleBank}
            volume={this.handleVolume}
            label={this.state.label}
          />
        </div>
      </div>
    );
  }
}

export default DrumPad;
