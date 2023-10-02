import React from 'react';
import './States.css';
import Header from "../header/Header.jsx";

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      substring: '',
      states: models.states(),
    }
    console.log('window.models.states', window.models.states);
  }

  handleChange = (event) => {
    this.setState({ substring: event.target.value });
  };
  render() {
    const { substring, states } = this.state;

    // Filter states and assign it back to the constant
    const filteredStates = states
        // convert state to lowercase and find input string
        .filter((state) => state.toLowerCase().includes(substring.toLowerCase()))
        //sort the returned array alphabetically
        .sort();

    return (
        <div className="states-view">
            <Header/>
            {/*input box*/}
          <input
              type="text"
              value={substring}
              //update the input
              onChange={this.handleChange}
              placeholder="type the state you are looking for"
          />
          <div className="displayed-substring">
            Substring used: {substring}
          </div>
            {/*print out the filtered & sorted array*/}
          {filteredStates.length > 0 ? (
              <ul>
                  {/*
                  added key prop for optimization*/}
                {filteredStates.map((state, index) => <li key={index}>{state} </li>)}
              </ul>
          ) : (
              <div>No states match the substring "{substring}"</div>
          )}
        </div>
    );
  }
}

export default States;
