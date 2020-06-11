import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    this.setState({ term: input.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
