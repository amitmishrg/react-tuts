# Handling Events

Handling events with React elements is very similar to handling events on DOM elements

For example:

```
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

- [Setup](https://github.com/amituidev/react-tuts/tree/setup#setup)
- [Components and Props](https://github.com/amituidev/react-tuts/tree/components-and-props#components-and-props)
- [Component lifestyle and State](https://github.com/amituidev/react-tuts/tree/component-lifestyle-state#the-component-lifecycle)
- [Handling Events](https://github.com/amituidev/react-tuts/tree/handling-events#handling-events)
