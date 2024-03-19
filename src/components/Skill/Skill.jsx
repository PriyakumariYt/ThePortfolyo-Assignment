
import PropTypes from 'prop-types';
import './Skill.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useAuth } from '../../contextApi/TokenApi';

const Skill = ({ data }) => {
  const user = useAuth();
  const skillsData = user.user.skills || []; 

  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{data.title}</h2>
                <div className="st-skill-subtitle">{data.text}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-progressbar-wrap">
              {skillsData.map((skill, index) => (
                <div
                  className="st-single-progressbar"
                  key={index}
                  data-aos={skill.effect}
                  data-aos-duration={skill.duration}
                  data-aos-delay={skill.delay}
                >
                  <div className="st-progressbar-heading">
                    <h3 className="st-progressbar-title">{skill.name}</h3>
                    <div
                      className="st-progressbar-percentage "
                      data--duration="1.5s"
                      data--delay="0.5s"
                    >
                      {skill.percentage}%
                    </div>
                  </div>
                  <div className="st-progressbar" data-progress={skill.percentage}>
                    <div className="st-progressbar-in "></div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.object,
};

export default Skill;

