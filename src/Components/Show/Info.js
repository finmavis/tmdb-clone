import React from 'react';
import Modal from '../UI/Modal';

import './Info.css';

const Info = props => {
  const { score, trailer, modal, toggleModal } = props;
  return (
    <div className='show-info'>
      <div className='show-rating'>
        {score} <span className='show-rating-muted'>/10</span>
      </div>
      <p>user score</p>
      {trailer ? (
        <button onClick={toggleModal}>&#9654; Play Trailer</button>
      ) : (
        ''
      )}
      {trailer ? (
        <Modal isOpen={modal} toggleModal={toggleModal}>
          <iframe
            title='Youtube Trailer'
            width='100%'
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
            frameBorder='0'
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default Info;
