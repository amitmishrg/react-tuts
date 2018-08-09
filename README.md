# Setup

#### Create a new project folder

Start a new react project by running the code below

```
mkdir react-app && cd react-app
```

#### Initialise the package.json file

Run

```
npm init
```

#### Install react and react-dom

```
npm install --save-dev react react-dom
```

#### Install Babel to use ES2015 syntax and JSX

```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

**_babel-core_**: Transforms your ES6 code into ES5.

**_babel-loader_**: Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel
babel-preset-env: Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support.

**_babel-preset-react_**: Babel preset for all React plugins, for example turning JSX into functions.

#### Create a Babel configuration file

```
touch .babelrc  
```

Add this code in .babelrc file

```
'{ "presets": ["react", "es2015"] }'
```

#### Install webpack and webpack-dev-server

```
npm install --save-dev webpack webpack-dev-server
```

#### Install sass-loader node-sass and style-loader

"style-loader" // creates style nodes from JS strings
"css-loader" // translates CSS into CommonJS
"sass-loader" // compiles Sass to CSS

```
npm install --save-dev style-loader css-loader sass-loader node-sass
```

#### Configure webpack to run using webpack-dev-server locally

The first step is to create a webpack.config.js file by running

```
touch webpack.config.js
```

Then copy and paste the code below into the file.

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./app/index.html"),
  filename: "./index.html"
});

module.exports = {
  entry: { main: "./app/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [new CleanWebpackPlugin("dist", {}), htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  stats: {
    colors: true
  },
  devtool: "source-map",
  devServer: {
    port: 3000
  }
};
```

Open package.json in your favorite code editor. In the scripts section, remove the test script, and add the following script. The scripts section should now look like this:

```
"scripts": {
    "build": "webpack --mode production ",
    "start": "webpack-dev-server --mode development --open"
  },
```

#### Create app setup

```
mkdir app && cd app
```

```
touch index.js & touch index.html
```

Add the following snippet in index.html

```
<html>

<head>
    <title>My Component Demo</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>

<body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
</body>

</html>
```

Add the following snippet in index.js

```
import React from "react";
import { render } from "react-dom";
import App from "./container/index";

render(<App />, document.getElementById("root"));
```

```
mkdir container && cd container
```

Then create index.js file in container folder

```
touch index.js
```

Add the following snippet in index.js

```
import React, { Component } from "react";

class App extends Component {
  render() {
    return <h1>Hello React</h1>;
  }
}

export default App;
```

#### Run app in development mode

```
npm run start
```

It automatically open the http://localhost:3000

#### Build app

```
npm run build
```

- [Setup](https://github.com/amituidev/react-tuts/tree/setup#setup)
- [Components and Props](https://github.com/amituidev/react-tuts/tree/components-and-props#components-and-props)
- [Component lifestyle and State](https://github.com/amituidev/react-tuts/tree/component-lifestyle-state#the-component-lifecycle)
- [Handling Events](https://github.com/amituidev/react-tuts/tree/handling-events#handling-events)
