import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { Container, Row } from '../Components/UI/Grid';
import LoaderList from '../Components/UI/LoaderList';
import ListItem from '../Components/ListItem';
import Heading from '../Components/UI/Heading';
import Pagination from '../Components/Pagination/Pagination';
import Next from '../Components/Pagination/Next';
import Previous from '../Components/Pagination/Previous';

import { getPopularTvs, getTopRatedTvs } from '../helpers/api';

class Tvs extends Component {
  state = {
    loading: false,
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  };

  componentDidMount() {
    const { page } = queryString.parse(this.props.location.search);
    this.loadData(page);
  };

  componentDidUpdate(prevProps, prevState) {
    if((prevProps.location.search !== this.props.location.search) || (prevProps.location.pathname !== this.props.location.pathname)) {
      const { page } = queryString.parse(this.props.location.search);
      this.loadData(page);
    }
  };

  toggleLoading = () => {
    this.setState({loading: !this.state.loading});
  };

  loadData = async (toPage = 1) => {
    this.toggleLoading();
    const { type } = this.props.match.params;
    let data;
    if (type === 'popular') {
      data = await getPopularTvs(toPage);
    }
    if (type === 'top-rated') {
      data = await getTopRatedTvs(toPage);
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
    document.title = "TMDB Clone | Tv Shows";
    return (
      <section className="list-item">
        <Container>
          <Heading type="h2">
            <Link to="/tvs/popular" className={`btn btn-blue btn-discover ${type === 'popular' ? 'active' : ''}`}>Popular</Link> or <Link to="/tvs/top-rated" className={`btn btn-green btn-discover ${type === 'top-rated' ? 'active' : ''}`}>Top Rated</Link> Tv Shows
          </Heading>
          <Row>
            { loading ? <LoaderList /> : <ListItem data={results} type='tv' />}
          </Row>
          <Pagination 
            currentPage={page} 
            totalPages={total_pages} 
            totalResults={total_results} >
            <Previous to={{
                pathname: url,
                search: `?page=${page - 1}`
              }}
            currentPage={page} />
            <Next to={{
                pathname: url,
                search: `?page=${page + 1}`
              }}
              currentPage={page}
              lastPages={total_pages} />
          </Pagination>
        </Container>
      </section>
    );
  };
};

export default Tvs;