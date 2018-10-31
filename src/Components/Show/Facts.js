import React, { Fragment } from 'react';
import FactItem from './FactItem';
import Social from './Social';
import Network from './Network';
import Genres from './Genres';

import formatDate from '../../helpers/formatDate';
import formatTime from '../../helpers/formatTime';

import './Facts.css';

const Facts = props => {
  const { url, social, status, releaseDate, language, genres, budget, revenue, runtime, type, episodeRuntime, networks } = props;
  return (
    <Fragment>
      <Social
        social={social} />
      <FactItem name="Status">{status}</FactItem>
      { networks ? <Network value={networks} /> : null }
      { type ? <FactItem name="Type">{ type }</FactItem> : null }
      <FactItem name="Release Information">
        { releaseDate ? formatDate(releaseDate) : "-" }
      </FactItem>
      <FactItem name="Original Language">
        { language }
      </FactItem>
      <p><strong>Runtime</strong></p>
      { url === "movie" ? <p className="mb-2">{runtime ? formatTime(runtime) : "-"}</p> : null }
      { url === "tv" && episodeRuntime.length === 0 && <p className="mb-2">-</p> }
      { url === "tv" && episodeRuntime !== 0 && 
        <div> 
          { episodeRuntime.map((time, i) => (
                <p className={i === episodeRuntime.length - 1 ? "mb-2" : ""} key={i}>{time}m</p>
              ))
            }
        </div>
      }
      { url === "movie" 
          ? <FactItem name="Budget">
              { budget === 0 ? '-' : `$${budget.toLocaleString()}` }
            </FactItem>
          : null
      }
      { url === "movie" 
          ? <FactItem name="Revenue">
              { revenue === 0 ? '-' : `$${revenue.toLocaleString()}` }
            </FactItem>
          : null
      }
      <Genres genres={genres} />
    </Fragment>
  );
};

export default Facts;