import React from 'react'
import PropTypes from 'prop-types';

export  function ImageGallery({children}) {
  return (
    <ul className="ImageGallery">
  {children}
</ul>
  )
}


ImageGallery.prototype = {
  children: PropTypes.any.isRequired,
};