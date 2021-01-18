import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '../../auth0-react-qs.js';
import {authConfig} from "../../auth.config.js"

const onRedirectCallback = useState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.target.Url
    ? appState.targetUrl
    :window.location.pathname
  )
}

ReactDOM.render(
  <Auth0Provider
      domain={authConfig.domain}
      client_id={authConfig.client_id}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
