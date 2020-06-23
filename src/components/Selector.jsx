import React, { Component } from "react";

class Selector extends Component {
  render() {
    const { measurements, handleSelector, populateWith } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="measurement">Measurement</label>
        <select
          className="form-control"
          id="measurement"
          onChange={handleSelector}
          placeholder="Select measurement"
        >
          {populateWith.map((element, index) => (
            <option key={index} value={measurements[index]}>
              {element}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Selector;
