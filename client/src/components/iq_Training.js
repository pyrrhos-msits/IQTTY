import React, { Component } from "react";
import "../stylesheets/iq_training.css";
/* import { Link } from "react-router-dom";*/
import IQttyTest from "./iq_test";
import { Tooltip } from "react-bootstrap";
class IqTraining extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complexity: "",
      timeout: "",
      runTest: false
    };

    this.handleComplexity = this.handleComplexity.bind(this);
    this.handleTimeout = this.handleTimeout.bind(this);
    /*   this.handleSubmit = this.handleSubmit.bind(this); */
    this.startTestHandler = this.startTestHandler.bind(this);
  }

  handleComplexity(event) {
    this.setState({
      complexity: event.target.value
    });
  }

  handleTimeout(event) {
    this.setState({
      timeout: event.target.value
    });
  }

  /*  handleSubmit(event) {
    event.preventDefault();

   console.log("Button clicked");
   console.log(this.state.complexity);
  console.log(this.state.timeout);
  }
 */
  startTestHandler(event) {
    console.log("Start Test Button clicked");
    console.log(this.state.complexity);
    console.log(this.state.timeout);
    this.setState({
      runTest: true
    });
  }

  render() {
    if (this.state.runTest) {
      return (
        <div>
          <IQttyTest complexity={this.state.complexity} timeout={this.state.timeout}/>
        </div>
      );
    } else {
      return (
        <section className="trainingsPage-container">
          <div>
            <h1>Welcome to IQtty training</h1>
            <p>
              Matrix tests are used in assessment centers to examine your skills
              in inductive reasoning.
            </p>
            <p>A matrix consists of nine boxes. One box is empty.</p>
            <p>
              Your task is to discover logical connections and compose the empty
              box based on the rule you found.
            </p>
            <p>Click here to start a test</p>

           

            <section id="selection">
              <article>
                <h3>
                  {" "}
                  <p>Select the complexity of your Tests:</p>
                </h3>
                <li>
                  <label>
                    <input
                      name="complexity"
                      type="radio"
                      value="Low"
                      onChange={this.handleComplexity}
                    />
                    Low
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      name="complexity"
                      type="radio"
                      value="Medium"
                      onChange={this.handleComplexity}
                    />
                    Medium
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      name="complexity"
                      type="radio"
                      value="High"
                      onChange={this.handleComplexity}
                    />
                    High
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      name="complexity"
                      type="radio"
                      value="Random"
                      onChange={this.handleComplexity}
                    />
                    Random
                  </label>
                </li>
              </article>
              <article>
                <h3>
                  <p>Timeout ?</p>
                </h3>

                <li>
                  <label>
                    <input
                      name="timeout"
                      type="radio"
                      value="yes"
                      onChange={this.handleTimeout}
                    />
                    Yes
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="timeout"
                      type="radio"
                      value="no"
                      onChange={this.handleTimeout}
                    />
                    No
                  </label>
                </li>
              </article>
            </section>
           
            
            <button
              className="trainingsPage-button"
              onClick={this.startTestHandler}
            >
              Start Test
             
            </button>
         
          </div>
        </section>
      );
    }
  }
}
export default IqTraining;
