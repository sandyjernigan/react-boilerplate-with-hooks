# React Boilerplate with Hooks

This project is a boilerplate for React, including:

- React
- Hooks (useReducer, useContext)
- Custom Hooks (Like redux Thunks)
- Axios

# Build

Run: ```npm install```

After run: ```npm start```

Enjoy and feel free to create new features and open pull requests!

# Dependencies

## [react](https://www.npmjs.com/package/react)
https://reactjs.org/
```
var React = require('react');
```
### [react-scripts](https://www.npmjs.com/package/react-scripts)
https://create-react-app.dev/
```
npx create-react-app react-boilerplate-with-hooks
```
### Available Scripts
In the project directory, you can run:
- `npm start` -- "react-scripts start"
- `npm build` -- "react-scripts build"
- `npm test` -- "react-scripts test --env=jsdom"
- `npm eject` -- "react-scripts eject"
- `npm lint` -- "eslint . --ext .js,.jsx,.ts,.tsx"

### [react-dom](https://www.npmjs.com/package/react-dom)

```
var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<MyComponent />, node);
```

#### API
##### react-dom
- findDOMNode
- render
- unmountComponentAtNode
##### react-dom/server
- renderToString
- renderToStaticMarkup

## [react-router-dom](https://www.npmjs.com/package/react-router-dom)
Quick Start Guide

https://reactrouter.com/web/guides/quick-start

```
// using ES6 modules
import { BrowserRouter, Route, Link } from "react-router-dom";
 
// using CommonJS modules
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
```

### useRouteMatch
```
import { useRouteMatch } from 'react-router-dom'

function App() {
  const {path, url} = useRouteMatch();

  return (
    <li>
      <Link to = {`${url}/employee-details`></Link>
    </li>

    <Switch>
        <Route path = {`${path}/employee-details`}>
        <employee-details/>
        </Route>
        </Switch>

  )
}
```
### useParams
```
import React from "react";
import { useParams } from "react-router-dom";
function App() {
  const params = useParams();
```
### useHistory 
```
import { useHistory } from 'react-router-dom'

function BackButton({ children }) {
  let history = useHistory()
  return (
    <button type="button" onClick={() => history.goBack()}>
      {children}
    </button>
  )
}
```

## [react-universal-hooks](https://www.npmjs.com/package/react-universal-hooks)

```
import "react-universal-hooks";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

  ReactDOM.render(
      <App />,
    document.getElementById('root'),
  );
```
### Api Reference
Api Reference are the same as official ones, so you can see api reference @ https://reactjs.org/docs/hooks-reference.html
Currently supported api on Classes Component:

- useState
- useEffect
- useLayoutEffect
- useMemo
- useCallback
- useReducer
- useRef
- useContext
- useImperativeHandle
- useDebugValue

## [reactstrap](https://reactstrap.github.io/)
Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your src/index.js file:
```
import 'bootstrap/dist/css/bootstrap.css';
```

## [node-sass](https://www.npmjs.com/package/node-sass)
dart sass to replace node-sass

## styled-components
```
import styled from 'styled-components'
```

## [eslint](https://www.npmjs.com/package/eslint)
## [prettier](https://www.npmjs.com/package/prettier)

## [yup](https://www.npmjs.com/package/yup)
https://github.com/jquense/yup
```
import * as yup from 'yup';
```
```
let yup = require('yup');

yup.mixed;
yup.string;
yup.number;
yup.boolean; // also aliased as yup.bool
yup.date;
yup.object;
yup.array;

yup.reach;
yup.addMethod;
yup.ref;
yup.lazy;
yup.setLocale;
yup.ValidationError;
```
## Next