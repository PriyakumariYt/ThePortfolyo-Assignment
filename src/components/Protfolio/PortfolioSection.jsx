
import PropTypes from 'prop-types';
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
import SinglePortfolio from './SinglePortfolio';
import Modal from '../Modal/Modal';
import { AuthProvider, useAuth } from '../../contextApi/TokenApi';

const PortfolioSection = ({ data }) => {
  const user = useAuth();
  const projects = user.user.projects || [];
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(projects.slice(0, 6)); // Display first 6 items
  const [showLoadMore, setShowLoadMore] = useState(true);

  const getData = (imgLink, title, subTitle) => {
    setTempData([imgLink, title, subTitle]);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = projects.slice(currentLength, currentLength + 6); // Load next 6 items
    setVisibleItems(prevItems => [...prevItems, ...nextChunk]);

    if (currentLength + 6 >= projects.length) {
      setShowLoadMore(false); // Hide "Load More" button when all items are loaded
    }
  };

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={'Portfolio'} />
        <div className="container">
          <div className="row">
            {visibleItems.map((project, index) => (
              <SinglePortfolio key={index} data={project} getData={getData} />
            ))}
          </div>
          {showLoadMore && (
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="st-portfolio-btn">
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal && (
        <Modal
          img={tempData[0]}
          title={tempData[1]}
          subTitle={tempData[2]}
          modalClose={modalClose}
        />
      )}
    </>
  );
};

PortfolioSection.propTypes = {
  data: PropTypes.object,
};

export default PortfolioSection;

// import React, { useState } from 'react';
// import SectionHeading from '../SectionHeading/SectionHeading';
// import SinglePortfolio from './SinglePortfolio';
// import Modal from '../Modal/Modal';
// import { useAuth } from '../../contextApi/TokenApi';

// const PortfolioSection = () => {
//   const user = useAuth();
//   const projects = user.user.projects || [];
//   const [modal, setModal] = useState(false);
//   const [tempData, setTempData] = useState([]);
//   const [visibleItems, setVisibleItems] = useState(projects.slice(0, 6));
//   const [showLoadMore, setShowLoadMore] = useState(true);

//   const getData = (image, title, subTitle) => {
//     setTempData([image, title, subTitle]);
//     setModal(true);
//   };

//   const modalClose = () => {
//     setModal(false);
//   };

//   const loadMoreItems = () => {
//     const currentLength = visibleItems.length;
//     const nextChunk = projects.slice(currentLength, currentLength + 6);
//     setVisibleItems(prevItems => [...prevItems, ...nextChunk]);

//     if (currentLength + 6 >= projects.length) {
//       setShowLoadMore(false);
//     }
//   };

//   return (
//     <>
//       <section id="portfolio">
//         <div className="st-height-b100 st-height-lg-b80"></div>
//         <SectionHeading title={'Portfolio'} />
//         <div className="container">
//           <div className="row">
//             {visibleItems.map((project, index) => (
//               <SinglePortfolio key={index} data={project} getData={getData} />
//             ))}
//           </div>
//           {showLoadMore && (
//             <div className="row">
//               <div className="col-lg-12 text-center">
//                 <div className="st-portfolio-btn">
//                   <button
//                     className="st-btn st-style1 st-color1"
//                     onClick={loadMoreItems}
//                   >
//                     Load more
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="st-height-b100 st-height-lg-b80"></div>
//       </section>
//       {modal && (
//         <Modal
//           image={tempData[0]}
//           title={tempData[1]}
//           subTitle={tempData[2]}
//           modalClose={modalClose}
//         />
//       )}
//     </>
//   );
// };

// export default PortfolioSection;
