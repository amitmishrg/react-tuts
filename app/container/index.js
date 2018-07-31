import React, { Component } from "react";
import ErrorBoundary from "../components/error-boundary";
import Info from "../components/info";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("component Did mount");
    this.setState({ count: 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevState);
  }

  render() {
    return (
      <ErrorBoundary>
        <h1>Count {this.state.count}</h1>
        <Info />
      </ErrorBoundary>
    );
  }
}

export default App;
