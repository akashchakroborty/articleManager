# Article Manager

> Article Manager is a Single page application that lets users Create, Read, Edit and Delete Articles. The Design is inspired from Medium.

## Demo

![49wvy9](https://user-images.githubusercontent.com/22369205/88949513-f8e42600-d2b0-11ea-9b7c-950e4ac2717f.gif)
![49wwv6](https://user-images.githubusercontent.com/22369205/88949713-3cd72b00-d2b1-11ea-8b26-68519b0d2992.gif)
![49wxa8](https://user-images.githubusercontent.com/22369205/88950058-ba02a000-d2b1-11ea-9f11-29e7236e3461.gif)
![49wxpu](https://user-images.githubusercontent.com/22369205/88950408-3ac19c00-d2b2-11ea-8bfc-a18045d3f370.gif)
![49wxzf](https://user-images.githubusercontent.com/22369205/88950599-7ceadd80-d2b2-11ea-8ceb-98210bd894e3.gif)

### Prerequisites

**You’ll need to have Node >= 6 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

### Installing

Steps to get a development env running:

- Make a local copy doing:

```
git clone https://github.com/akashchakroborty/articleManager.git
```

- Run npm install:

```
npm install
```

- Run start:

```
npm start
```

- Run Json Server:

```
npm run jsonServer
```

- Then open http://localhost:3000/ to see the app.

The application list's all the Articles on the initial page (Home page). On clicking on any article image or body section you will be redirected to Article Read Page and can Read the article. In order to create a new article click on Create Article button. You can also Edit or Delete articles.

## Running the tests

To run the automated tests please run

```
npm test
```

To run BDD test please run
```
npm run cucumber
```

## Technologies used

- [React](https://github.com/facebook/create-react-app) - The web Library.
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps.
- [Redux-Saga](https://github.com/redux-saga/redux-saga) - To manage application side effects.
- [axios](https://github.com/axios/axios) - As HTTP client.
- [JavaScript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language.
- [Jest](https://jestjs.io/en/) - Testing Framework.
- [Enzyme](https://github.com/airbnb/enzyme) - To test React components.
- [Styled-Components](https://github.com/styled-components/styled-components) - CSS in JS to style components.
- [Reselect](https://github.com/reduxjs/reselect) - Selector library for Redux.
- [Cucumber](https://github.com/cucumber/cucumber-js) - BDD testing library.

## Authors

- **Akash Chakroborty** - [akashchakroborty](https://github.com/akashchakroborty)
