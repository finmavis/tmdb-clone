import React, { Component, Fragment } from 'react';
import Header from '../Components/Show/Header';
import Detail from '../Components/Show/Detail';
import { Container } from '../Components/UI/Grid';
import Loader from '../Components/UI/Loader';

import { getSingleTv } from '../helpers/api';
import { languageList } from '../shared/List';

class ShowTv extends Component {
  state = {
    loading: false,
    backdrop_path: null,
    episode_run_time: [],
    first_air_date: '',
    genres: [],
    homepage: null,
    id: null,
    name: null,
    networks: [],
    number_of_episodes: null,
    number_of_seasons: null,
    original_language: 'en',
    overview: null,
    poster_path: null,
    status: null,
    type: null,
    vote_average: null,
    external_ids: {},
    videos: {
      results: [],
    },
    recommendations: {
      results: [],
    },
    credits: {
      cast: [],
    },
    modal: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.loadSingleMovie(id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (prevProps.match.url !== this.props.match.url) {
      this.loadSingleMovie(id);
    }
  }

  loadSingleMovie = async id => {
    this.toggleLoading();
    const data = await getSingleTv(id);
    this.setState({
      ...this.state,
      ...data,
      loading: false,
    });
    window.scroll({
      top: 0,
    });
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    const {
      loading,
      name,
      poster_path,
      first_air_date,
      vote_average,
      overview,
      backdrop_path,
      homepage,
      external_ids,
      status,
      genres,
      episode_run_time,
      original_language,
      type,
      networks,
      modal,
    } = this.state;
    const { cast } = this.state.credits;
    const { results: recommendations } = this.state.recommendations;
    const trailer = this.state.videos.results.find(
      video => video.type === 'Trailer',
    );
    const lang = languageList.find(
      lang => lang.iso_639_1 === original_language,
    );
    const [, url] = this.props.match.url.split('/');
    document.title = `TMDB Clone ${name ? `| ${name}` : ''}`;
    return (
      <section className='section-show'>
        {loading ? (
          <Container>
            <Loader type='show' />
          </Container>
        ) : (
          <Fragment>
            <Header
              title={name}
              poster={poster_path}
              year={first_air_date}
              score={vote_average}
              trailer={trailer}
              text={overview}
              backdrop_path={backdrop_path}
              modal={modal}
              toggleModal={this.toggleModal}
            />
            <Detail
              url={url}
              title={name}
              casts={cast.slice(0, 5)}
              recommendations={recommendations}
              homepage={homepage}
              social={external_ids}
              status={status}
              releaseDate={first_air_date}
              language={lang.english_name}
              genres={genres}
              episodeRuntime={episode_run_time}
              type={type}
              networks={networks}
            />
          </Fragment>
        )}
      </section>
    );
  }
}

export default ShowTv;
