import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export function ImageGallery({ children }) {
  return <ul className={css.ImageGallery}>{children}</ul>;
}

ImageGallery.prototype = {
  children: PropTypes.any.isRequired,
};
