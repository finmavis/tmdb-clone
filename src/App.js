import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation';
import SearchBox from './Components/Search/Search';

// Using code splitting
import asyncComponent from './hoc/asyncComponent';

// Code Splitting Containers
const AsyncDiscover = asyncComponent(() => import('./Containers/Discover'));
const AsyncMovies = asyncComponent(() => import('./Containers/Movies'));
const AsyncTvs = asyncComponent(() => import('./Containers/Tvs'));
const AsyncShowMovie = asyncComponent(() => import('./Containers/ShowMovie'));
const AsyncShowTv = asyncComponent(() => import('./Containers/ShowTv'));
const AsyncSearch = asyncComponent(() => import('./Containers/Search'));

class App extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      searchQuery: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery === '') return;
    if (
      this.props.location.pathname === '/search/movie' ||
      this.props.location.pathname === '/search/tv'
    ) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `?query=${this.state.searchQuery}`,
      });
      return;
    }
    this.props.history.push({
      pathname: '/search/movie',
      search: `?query=${this.state.searchQuery}`,
    });
  };

  render() {
    return (
      <Fragment>
        <Navigation />
        <SearchBox
          value={this.state.searchQuery}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <main className='main'>
          <Switch>
            <Route path='/discover/:type' component={AsyncDiscover} />
            <Route path='/movies/:type' component={AsyncMovies} />
            <Route path='/tvs/:type' component={AsyncTvs} />
            <Route path='/movie/:id' component={AsyncShowMovie} />
            <Route path='/tv/:id' component={AsyncShowTv} />
            <Route path='/search/:type' component={AsyncSearch} />
            <Redirect from='/movies' to='/movies/popular' />
            <Redirect from='/tvs' to='/tvs/popular' />
            <Redirect from='/search' to='/search/movie' />
            <Redirect from='/' to='/discover/movie' />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default withRouter(App);
