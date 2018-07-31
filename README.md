# The Component Lifecycle

Each component has several “lifecycle methods” the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.

[Lifecycle Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM

- **constructor()**
- **render()**
- **componentDidMount()**

#### [constructor()](https://reactjs.org/docs/react-component.html#constructor)

```
constructor(props)
```

The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement.

Typically, React constructors are only used for two purposes:

- Initializing local state by assigning an object to this.state.
- Binding event handler methods to an instance.

```
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

#### [render()](https://reactjs.org/docs/react-component.html#render)

When the render method called, it should examine this.props and this.state and return the React elements.

```
render() {
  return (<h1>Hello World</h1>)
}
```

#### [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)

componentDidMount() is invoked immediately after a component is inserted into DOM the tree.
If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

```
render() {
  return (<h1>Hello World</h1>)
}
```

### Updating

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- **shouldComponentUpdate()**
- **render()**
- **componentDidUpdate()**

#### [shouldComponentUpdate()](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)

shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render.

```
shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state, nextState);
    return true;
  }
```

#### [componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate)

componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

```
componentDidUpdate(prevProps, prevState) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

**Note:** You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition like in the example above, or you’ll cause an infinite loop.

### Unmounting

This method is called when a component is being removed from the DOM:

- **componentWillUnmount()**

You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.

### [Error Handling](https://reactjs.org/docs/error-boundaries.html)

This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

- **componentDidCatch()**

Example:

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

Then you can use it as a regular component:

```
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

- [Setup](https://github.com/amituidev/react-tuts/tree/setup#setup)
- [Components and Props](https://github.com/amituidev/react-tuts/tree/components-and-props#components-and-props)
- [Component lifestyle and State](https://github.com/amituidev/react-tuts/tree/component-lifestyle-state#the-component-lifecycle)
