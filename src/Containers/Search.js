import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import { Container, Row } from '../Components/UI/Grid';
import LoaderList from '../Components/UI/LoaderList';
import ListItem from '../Components/ListItem';
import Heading from '../Components/UI/Heading';
import Pagination from '../Components/Pagination/Pagination';
import Next from '../Components/Pagination/Next';
import Previous from '../Components/Pagination/Previous';

import { getSearchQueryMovie, getSearchQueryTv } from '../helpers/api';

class Search extends Component {
  state = {
    loading: false,
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  };

  componentDidMount() {
    const { page, query } = queryString.parse(this.props.location.search);
    this.loadData(page, query);
  };

  componentDidUpdate(prevProps, prevState) {
    if((prevProps.location.search !== this.props.location.search) || (prevProps.location.pathname !== this.props.location.pathname)) {
      const { page, query } = queryString.parse(this.props.location.search);
      this.loadData(page, query);
    }
  };

  toggleLoading = () => {
    this.setState({loading: !this.state.loading});
  };

  loadData = async (toPage = 1, query) => {
    this.toggleLoading();
    const { type } = this.props.match.params;
    let data;
    if (type === 'movie') {
      data = await getSearchQueryMovie(toPage, query);
    }
    if (type === 'tv') {
      data = await getSearchQueryTv(toPage, query);
    }
    this.setState(prevState => ({
      ...this.state,
      ...data,
      loading: !prevState.loading,
    }));
  };

  render() {
    const { loading, results, page, total_pages, total_results } = this.state;
    const { url } = this.props.match;
    const { type } = this.props.match.params;
    const { query } = queryString.parse(this.props.location.search);
    return (
      <section className="list-item">
        <Container>
          <Heading type="h2">
            search <Link to={`/search/movie?query=${query}`} className={`btn btn-blue btn-discover ${type === 'movie' ? 'active' : ''}`}>movies</Link> or <Link to={`/search/tv?query=${query}`} className={`btn btn-green btn-discover ${type === 'tv' ? 'active' : ''}`}>tv shows</Link>
          </Heading>
          <Row>
            { loading ? <LoaderList /> : <ListItem data={results} type={type} />}
          </Row>
          <Pagination 
            currentPage={page} 
            totalPages={total_pages} 
            totalResults={total_results} >
            <Previous to={{
                pathname: url,
                search: `?page=${page - 1}&query=${query}`
              }}
            currentPage={page} />
            <Next to={{
                pathname: url,
                search: `?page=${page + 1}&query=${query}`
              }}
              currentPage={page}
              lastPages={total_pages} />
          </Pagination>
        </Container>
      </section>
    );
  };
};

export default Search;