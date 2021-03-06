import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import BlogForm from './components/BlogForm';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FetchBlog from './components/FetchBlog';


const App = () => (
    <Fragment>
    <NavBar />
    <br />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blogs' component={FetchBlog} />
        <Route exact path='/blogform' component={BlogForm} />
      </Switch>
    </Fragment>
);
export default App;
