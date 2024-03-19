
import React from 'react';
import PropTypes from 'prop-types';
import './Review.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import Carousel from '../Slider/Carousel';
import { useAuth } from '../../contextApi/TokenApi';

const Review = () => {
  const user = useAuth();
  const testimonials = user.user.testimonials || [];
  // console.log("Testimonials:", testimonials);

  const sliderSetting = {
    // Add your slider settings here
  };

  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Review" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <Carousel data={{ useFor: "review", sliderSetting, informations: testimonials }} />
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}

Review.propTypes = {
  data: PropTypes.object
}

export default Review;
