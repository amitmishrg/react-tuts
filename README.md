# What is React js ?

A javaScript library for building user interfaces. It uses a concept called the Virtual DOM that selectively renders subtrees of nodes based upon state changes. It does the least amount of DOM manipulation possible in order to keep your components up to date.

## What is a React Component?

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

## Type of React Components

There are two main types of components **Class Components** and **Functional**.
If you don’t need lifecycle methods prefer the **Functional or Stateless Components**.

### Class Components

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Functional or Stateless Components

```
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}
```

### What is JSX ?

Fundamentally, JSX just provides **syntactic sugar** for the **React.createElement(component, props, ...children)** function.
[Read more.](https://reactjs.org/docs/introducing-jsx.html)

JSX code example:

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```
ReactDOM.render(
    <element />,
    document.getElementById('root')
  );
```

- [Setup](https://github.com/amituidev/react-tuts/tree/setup#setup)
- [Components and Props](https://github.com/amituidev/react-tuts/tree/components-and-props#components-and-props)
- [Component lifestyle and State](https://github.com/amituidev/react-tuts/tree/component-lifestyle-state#the-component-lifecycle)
- [Handling Events](https://github.com/amituidev/react-tuts/tree/handling-events#handling-events)
