import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import rootReducer from './components/reducer/index';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(promise, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);






// {
//   "name": "client",
//     "version": "0.1.0",
//       "private": true,
//         "dependencies": {
//     "@material-ui/core": "^4.11.0",
//       "@testing-library/jest-dom": "^5.11.4",
//         "@testing-library/react": "^11.1.0",
//           "@testing-library/user-event": "^12.1.10",
//             "axios": "^0.21.0",
//               "bootstrap": "^4.5.3",
//                 "firebase": "^7.24.0",
//                   "node-sass": "^4.14.1",
//                     "react": "^17.0.1",
//                       "react-bootstrap": "^1.4.0",
//                         "react-dom": "^17.0.1",
//                           "react-router-dom": "^5.2.0",
//                             "react-scripts": "4.0.0",
//                               "redux": "^4.0.5",
//                                 "redux-logger": "^3.0.6",
//                                   "redux-promise-middleware": "^6.1.2",
//                                     "web-vitals": "^0.2.4"
//   },










// {
//   "name": "server",
//     "version": "1.0.0",
//       "description": "",
//         "main": "index.js",
//           "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//     "author": "",
//       "license": "ISC",
//         "dependencies": {
//     "bcrypt": "^5.0.0",
//       "body-parser": "^1.19.0",
//         "cookie-parser": "^1.4.5",
//           "cors": "^2.8.5",
//             "dotenv": "^8.2.0",
//               "express": "^4.17.1",
//                 "http-proxy-middleware": "^1.0.6",
//                   "jsonwebtoken": "^8.5.1",
//                     "mysql2": "^2.2.5",
//                       "nodemon": "^2.0.6"
//   }
// }
