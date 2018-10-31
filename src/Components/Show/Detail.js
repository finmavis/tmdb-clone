import React from "react";
import { Container, Row, Col } from "../UI/Grid";
import Heading from "../UI/Heading";
import Cast from "./Cast";
import Recomendation from "./Recomendation";
import Facts from "./Facts";

import "./Detail.css";

const Detail = props => {
  const { url, title, casts, recommendations, homepage, social, status, releaseDate, language, genres, budget, revenue, runtime, type, episodeRuntime, networks } = props;
  const socialObj = { ...social, homepage };
  return (
    <div className="show-detail">
      <Container>
        <Row>
          <Col column="col-3-of-4">
            <Cast casts={casts} />
            <Recomendation 
              url={url}
              title={title}
              recommendations={recommendations} />
          </Col>
          <Col column="col-1-of-4">
            <section className="facts">
              <Heading type="h3">Facts</Heading>
              <Facts
                url={url}
                social={{ ...socialObj }}
                status={status}
                releaseDate={releaseDate}
                type={type}
                language={language}
                genres={genres}
                budget={budget}
                revenue={revenue}
                runtime={runtime}
                episodeRuntime={episodeRuntime}
                networks={networks} />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
