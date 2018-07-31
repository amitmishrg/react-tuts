# Components and Props

Conceptually, components are like JavaScript functions. They accept “props” and return React elements describing what should appear on the screen.

#### Example

The simplest way to define a component is to write a JavaScript function:

```
const Welcome = props => {
  return <h1>Hello {props.name}</h1>;
};

const App = props => {
  return (
    <React.Fragment>
      <Welcome name="Amit" />
      <Welcome name="Rahul" />
      <Welcome name="John" />
    </React.Fragment>
  );
};
```

Let’s recap what happens in this example:

1.  App component calls the Welcome component with {name: 'Amit'} as the props.
2.  Our Welcome component returns a <h1>Hello, Amit</h1> element as the result.
3.  React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

**Note: Always start component names with a capital letter.**
React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

- [Setup](https://github.com/amituidev/react-tuts/tree/setup#setup)
- [Components and Props](https://github.com/amituidev/react-tuts/tree/components-and-props#components-and-props)
- [Component lifestyle and State](https://github.com/amituidev/react-tuts/tree/component-lifestyle-state#the-component-lifecycle)
