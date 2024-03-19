import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data, getData }) => {
  const { imgLinkLg, title, subTitle, effect, duration, delay, image, techStack } = data;

  return (
    <div className="col-lg-4 col-md-6" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
      <div className="st-portfolio-single st-style1" onClick={() => getData(imgLinkLg, title, subTitle)}>
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={image.url} alt={title} />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{title}</h5>
              <p>{techStack.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.shape({
    imgLinkLg: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    effect: PropTypes.string,
    duration: PropTypes.number,
    delay: PropTypes.number,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    techStack: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  getData: PropTypes.func.isRequired,
};

export default SinglePortfolio;
