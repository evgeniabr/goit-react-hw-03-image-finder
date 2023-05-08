import React from 'react'
import PropTypes from 'prop-types';

export  function ImageGalleryItem({
  img: { webformatURL, tags, largeImageURL },
  toggleModal,
  setModalImg,
})  {
  return (
    <li className="ImageGalleryItem">
  <img className='ImageGalleryItem-image' src={webformatURL} alt={tags}  onClick={() => {
          toggleModal();
          setModalImg(largeImageURL);
        }}/>
</li>
    
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setModalImg: PropTypes.func.isRequired,
};
