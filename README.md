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
## [prop-types](https://www.npmjs.com/package/prop-types)
```
import PropTypes from 'prop-types';
class MyComponent extends React.Component {
  render() {
    // ... do things with the props
  }
}
MyComponent.propTypes = {
  myProp: PropTypes.bool
};
```
## [axios](https://www.npmjs.com/package/axios)
https://axios-http.com/docs/intro

Example
```
const axios = require('axios').default;
```
Performing a GET request
```
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
NOTE: async/await is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.
```
Performing a POST request
```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
Performing multiple concurrent requests

function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```
## [react-axios](https://www.npmjs.com/package/react-axios)
Base Request Component
```
<Request
  instance={axios.create({})} /* custom instance of axios - optional */
  method="" /* get, delete, head, post, put and patch - required */
  url="" /*  url endpoint to be requested - required */
  data={} /* post data - optional */
  params={} /* queryString data - optional */
  config={} /* axios config - optional */
  debounce={200} /* minimum time between requests events - optional */
  debounceImmediate={true} /* make the request on the beginning or trailing end of debounce - optional */
  isReady={true} /* can make the axios request - optional */
  onSuccess={(response)=>{}} /* called on success of axios request - optional */
  onLoading={()=>{}} /* called on start of axios request - optional */
  onError=(error)=>{} /* called on error of axios request - optional */
/>
```
Helper Components
```
<Get ... />
<Delete ... />
<Head ... />
<Post ... />
<Put ... />
<Patch ... />
```
Example
Include in your file
```
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
```
Performing a GET request
```
// Post a request for a user with a given ID
render() {
  return (
    <div>
      <Get url="/api/user" params={{id: "12345"}}>
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            return (<div>{response.data.message} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
    </div>
  )
}
```
## Next