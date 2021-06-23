import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main'
import Bar from './components/Bar'
import ShowPost from './components/ShowPost';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

fetch('http://127.0.0.1:3001/get-all-posts')
  .then(response => response.json())
  .then(data => {
    ReactDOM.render(
      <React.StrictMode>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Bar />
              <Main posts={data} />
            </Route>
            <Route path='/show-post/:id' render={() => {
              return (
                <>
                  <Bar />
                  <ShowPost />
                </>
              )
            }} />

          </Switch>
        </Router>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
