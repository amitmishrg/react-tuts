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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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

Open package.json in your favorite code editor. In the scripts section, remove the test script, and add a script named webpack that compiles app.js. The scripts section should now look like this:

```
"scripts": {
    "webpack": "webpack"
}
```
