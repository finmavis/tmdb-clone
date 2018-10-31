import React, { Component, Fragment } from 'react';
import Header from '../Components/Show/Header';
import Detail from '../Components/Show/Detail';
import { Container } from '../Components/UI/Grid';
import Loader from '../Components/UI/Loader';

import { getSingleMovie } from '../helpers/api';
import { languageList } from '../shared/List';

class ShowMovie extends Component {
  state = {
    loading: false,
    backdrop_path: null,
    budget: 0,
    genres: [],
    homepage: null,
    id: null,
    overview: null,
    poster_path: null,
    release_date: '',
    revenue: 0,
    runtime: null,
    original_language: 'en',
    status: null,
    title: null,
    vote_average: 0,
    videos: {
      results: [
        {}
      ]
    },
    casts: {
      cast: []
    },
    recommendations: {
      results: []
    },
    external_ids: {},
    modal: false
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.loadSingleMovie(id);
  };

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if(prevProps.match.url !== this.props.match.url) {
      this.loadSingleMovie(id)
    };
  };

  loadSingleMovie = async id => {
    this.toggleLoading();
    const data = await getSingleMovie(id);
    this.setState({
      ...this.state,
      ...data,
      loading: false
    });
    window.scroll({
      top: 0,
    })
  };

  toggleLoading = () => {
    this.setState({loading: !this.state.loading});
  };
  
  toggleModal = () => {
    this.setState({modal: !this.state.modal})
  }

  render() {
    const { poster_path, title, release_date, vote_average, overview, backdrop_path, homepage, external_ids, status, genres, budget, revenue, runtime, loading, original_language, modal } = this.state;
    const { cast } = this.state.casts;
    const { results:recommendations } = this.state.recommendations;
    const trailer = this.state.videos.results.find(video => video.type === "Trailer");
    const lang = languageList.find(lang => lang.iso_639_1 === original_language);
    const [ , url, ] = this.props.match.url.split("/");
    document.title = `TMDB Clone ${title ? `| ${title}` : ''}`;
    return (
      <section className="section-show">
        { loading 
          ? <Container>
              <Loader type="show" />
            </Container>
          : <Fragment>
            <Header
              title={title}
              poster={poster_path}
              year={release_date}
              score={vote_average}
              trailer={trailer}
              text={overview}
              backdrop_path={backdrop_path}
              modal={modal}
              toggleModal={this.toggleModal} />
            <Detail
              url={url}
              title={title}
              casts={cast.slice(0, 5)}
              recommendations={recommendations}
              homepage={homepage}
              social={external_ids}
              status={status}
              releaseDate={release_date}
              language={lang.english_name}
              genres={genres} 
              budget={budget}
              revenue={revenue}
              runtime={runtime} />
            </Fragment>
        }
      </section>
    );
  };
};

export default ShowMovie;