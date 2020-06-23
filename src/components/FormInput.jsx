import React, { Component } from "react";

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      firstQuantity: this.props.populateWith[0],
      secondQuantity: this.props.populateWith[0],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.populateWith !== this.props.populateWith) {
      this.setState({
        amount: 0,
        firstQuantity: this.props.populateWith[0],
        secondQuantity: this.props.populateWith[0],
      });
    }
  }

  handleConversion = (event) => {
    event.preventDefault();
    this.props.handleConversion(this.state);
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleConversion}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={this.state.amount}
            placeholder=""
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <div className="form-group col-3">
            <label htmlFor="firstQuantity">From</label>
            <select
              className="form-control"
              id="firstQuantity"
              name="firstQuantity"
              value={this.state.firstQuantity}
              onChange={this.handleChange}
            >
              {this.props.populateWith.map((element, index) => (
                <option key={index} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-3">
            <label htmlFor="secondQuantity">To</label>
            <select
              className="form-control"
              id="secondQuantity"
              name="secondQuantity"
              value={this.state.secondQuantity}
              onChange={this.handleChange}
            >
              {this.props.populateWith.map((element, index) => (
                <option key={index} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-6 mt-3 mr-auto">
            <button
              type="submit"
              className="btn btn-block w-50 btn-primary mt-3"
            >
              Convert
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormInput;
