# Github repos api

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, to run the project:

### `yarn install`

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Tech and Features

```
1. React
2. Redux
3. ErrorBoundary
4. React.lazy Code Splitting (Component and Route based splitting)
5. React Router
6. Styled Components
7. React Testing Library
```

## Project Architecture

```
  - src
    - redux architecture (actions, reducer, store)
    - services
    - components
    - errors (error handling)
    - pages
    - utils
    - index.js
    - App.jsx
```

## Pages

_Repos_

Each new page will follow the same folder structure

```
pages
  - ReposPage.jsx
  - views
  - styles
  - container

1. ReposPage.jsx - Contains main business logic, redux state is consumed here and passed to children as props
2. views folder - Contains files for between view templates
3. styles folder - Contains styles for all the components
4. containers folder - Contains container components
```

## Components

Custom components

```
1. Header
2. List - uses the render prop pattern
3. SearchBar
```

## Testing

_Header_ and _List_ components have unit tests defined, gives the gist of how the rest of the components would be tested

Redux testing
In progress..
