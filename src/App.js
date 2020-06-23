import React, { Component } from "react";
import convert from "convert-units";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormInput from "./components/FormInput";
import Selector from "./components/Selector";

class App extends Component {
  constructor() {
    super();

    this.state = {
      mainSelector: "",
      firstQuantity: "",
      secondQuantity: "",
      input: 0,
      output: 0,
      isConvert: false,
    };
  }

  generationMainSelector = () => {
    return convert()
      .measures()
      .map((element) => element[0].toUpperCase() + element.slice(1));
  };

  handleSelector = (event) => {
    event.preventDefault();
    this.setState({
      mainSelector: event.target.value,
      firstQuantity: "",
      secondQuantity: "",
      input: 0,
      output: 0,
      isConvert: false,
    });
  };

  handleConversion = (value) => {
    console.log(value);
    const { amount, firstQuantity, secondQuantity } = value;
    const result = convert(amount).from(firstQuantity).to(secondQuantity);
    this.setState({
      input: amount,
      firstQuantity: firstQuantity,
      secondQuantity: secondQuantity,
      output: result,
      isConvert: true,
    });
  };

  render() {
    return (
      <div className="">
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">
                Measure Units Calculator
              </h3>
              <Selector
                populateWith={this.generationMainSelector()}
                handleSelector={this.handleSelector}
                measurements={convert().measures()}
                value={this.state.mainSelector}
              />
              {this.state.mainSelector ? (
                <FormInput
                  populateWith={convert().possibilities(
                    this.state.mainSelector
                  )}
                  isConvert={this.state.isConvert}
                  handleConversion={this.handleConversion}
                />
              ) : (
                <> </>
              )}
              {this.state.isConvert ? (
                <h2>
                  {this.state.input}({this.state.firstQuantity}) =
                  {this.state.output}({this.state.secondQuantity})
                </h2>
              ) : (
                <> </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
