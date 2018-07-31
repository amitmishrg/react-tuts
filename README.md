# Components and Props

Conceptually, components are like JavaScript functions. They accept “props” and return React elements describing what should appear on the screen.

#### Example

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
