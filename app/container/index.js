import React, { Component } from "react";
import ErrorBoundary from "../components/error-boundary";
import Info from "../components/info";

class App extends Component {
  // Initialization
  constructor(props) {
    console.log("constructor initialization");
    super(props);
    this.state = {
      count: 0
    };
    this.changeState = this.changeState.bind(this);
  }

  // Mounting
  componentWillMount() {
    console.log("component Will mount");
  }

  componentDidMount() {
    console.log("component Did mount");
  }

  // Updating
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps", newProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // Are we adding new items to the list?
  //   // Capture the scroll position so we can adjust scroll later.
  //   console.log("getSnapshotBeforeUpdate", prevProps, prevState);
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  changeState() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    console.log("render");
    return (
      <React.Fragment>
        <button onClick={this.changeState}>Set</button>
        <h1>
          Count {this.state.count} {this.props.title}
        </h1>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  title: "value"
};

export default App;
