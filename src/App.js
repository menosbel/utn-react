import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router';
import Menu from './components/Menu';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';
//import firebase from './config/firebase'

function App() {
  //console.log(firebase.database())
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <hr></hr>
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/producto/:id" component={ProductDetail} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
