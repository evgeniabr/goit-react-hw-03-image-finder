import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({
  img: { webformatURL, tags, largeImageURL },
  toggleModal,
  setModalImg,
}) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        onClick={() => {
          toggleModal();
          setModalImg(largeImageURL);
        }}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setModalImg: PropTypes.func.isRequired,
};
