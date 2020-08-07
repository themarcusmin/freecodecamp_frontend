import React, { Component } from "react";
import $ from "jquery";
import TogglePower from "./TogglePower";
import ToggleBank from "./ToggleBank";
import VolumeSlider from "./VolumeSlider";

class DrumSettings extends Component {
  state = {
    checked_power: true,
    checked_bank: false
  };
  handlePowerChange = e => {
    this.setState(
      {
        checked_power: !this.state.checked_power
      },
      () => this.props.power(this.state.checked_power)
    );
  };
  handleBankChange = e => {
    this.setState(
      {
        checked_bank: !this.state.checked_bank
      },
      () => this.props.bank(this.state.checked_bank)
    );
  };
  handleVolumeChange = e => {
    // console.log(e.target.value);
    this.props.volume(parseInt(e.target.value));
  };
  componentDidMount() {
    $("#powerlever").prop("checked", true);
  }
  render() {
    return (
      <div className="container settings">
        <div className="powerTag">Power</div>
        <TogglePower
          onChange={this.handlePowerChange}
          checked={this.state.checked_power}
        />
        <div className="audio-name">{this.props.label}</div>
        <VolumeSlider onChange={this.handleVolumeChange} />
        <div className="switchTag">Bank</div>
        <ToggleBank
          onChange={this.handleBankChange}
          checked={this.state.checked_bank}
        />
      </div>
    );
  }
}

export default DrumSettings;
