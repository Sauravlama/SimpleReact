import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Sree", "Babita", "Vicky", "Oli", "Mama"],
  };
  Incre = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getbadgeClass()}>{this.formatCount()}</span>
        <button onClick={this.Incre} className="btn-primary">
          Increment
        </button>
      </div>
    );
  }
  getbadgeClass() {
    let classes = "badge m-4 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero   " : count;
  }
}

export default Counter;
