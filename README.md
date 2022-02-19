# React redux practice

implemented simple react-redux app

## What I learned

uses of react-redux

### react-redux

- npm i redux react-redux
- set `Provider`, `store` in the index.js
- implement actions
  - action is a function which returns type and data as an object
- implement reducers
  - reducer is a function stored in `store`
  - return data from action
  - make multiple reducers to a module using `combineReducers`
- implment component using `connect`
  - connect is a method which returns components with stored state
  - first argument is `mapStateToProps` which provides props to components using state from reducer
  - second argument is `action` to be dispatched
  - `action` can be called in the components as a prop, and will be dispatched for operating a reducer
