import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

const firstPage = (props) => (
  <div>
    หน้าแรก
  </div>
)

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Link to='/'>หน้าแรก</Link> | 
      <Link to='/app'>เปิด Visit</Link>
      <Switch>
        <Route path="/app" component={App}/>
        <Route path="/" component={firstPage}/>
      </Switch>
    </div>
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
