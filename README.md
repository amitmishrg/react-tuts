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
var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/app.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader'
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
```

Open package.json in your favorite code editor. In the scripts section, remove the test script, and add a script named webpack that compiles app.js. The scripts section should now look like this:

```
"scripts": {
    "webpack": "webpack"
}
```
