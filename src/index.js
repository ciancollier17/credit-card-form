import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './App';
import LoadingPage from './LoadingPage';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "./formcontainer.css";
import "./creditcard.css";
import "./form.css";
import "./loadingpage.css";

let store = createStore(reducers);

const routing = (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/loading" component={LoadingPage} />
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
