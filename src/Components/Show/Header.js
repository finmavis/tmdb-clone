import React from 'react';
import { Container, Row, Col } from '../UI/Grid';
import Poster from './Poster';
import Title from './Title';
import Info from './Info';
import Overview from './Overview';

import './Header.css';

const Header = props => {
  const { title, poster, year, score, trailer, text, backdrop_path, modal, toggleModal } = props;
  const style = {
    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(11.76%, 15.29%, 17.25%, 0.90) 0%, 
      rgba(11.76%, 15.29%, 17.25%, 0.80) 100%), 
      url(https://image.tmdb.org/t/p/original${backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  };
  return (
    <header className="show-header" style={style}>
      <Container>
        <Row>
          <Col column="col-1-of-4">
            <Poster
              imageUrl={poster}
              title={title} />
          </Col>
          <Col column="col-3-of-4">
            <div className="show-content">
              <Title
                name={title}
                year={year} />
              <Info
                score={score}
                trailer={trailer}
                modal={modal}
                toggleModal={toggleModal} />
              <Overview
                text={text} />
              </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;