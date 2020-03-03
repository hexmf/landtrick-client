# LandTick Frontend

Netlify : [soon]

## Tech Stack

- React: To component-based web application
  - React Router: To manage multiple pages/routes of the application
  - React Helmet: To change the title when we change the page in Router [soon]
- Redux: To managing global state in store
  - Redux Devtools extension: To inspect all Redux behavior
  - Redux Logger: To log our actions in the console
  - Redux Thunk: To asynchronous operations in reducer [soon]
- CSS in JS: To style the components without CSS file
  - Emotion: To style the components flexibly with `styled` or other ways
  - `styled-components`: To style the components with `styled`
- Axios: To request/fetch data to/from the backend API server
- `dayjs`: To convert from any date to better formatted date [soon]
- Filestack: To upload and retrieve images [soon]
- JWT Decoder: To decode JWT that is saved in the browserStorage

## Development

```sh
yarn start
```

Then open `http://localhost:3000`.

## Building

```sh
yarn build
npm install -g serve
serve -s build
```

Then open `http://localhost:5000`.

In deployment server such as Netlify, this build process should run automatically and the port is assigned by them (not `5000`).

## Deploying

You can use Netlify to deploy. After which, you have to configure the environment variables as well.
