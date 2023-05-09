import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export function Button({ incrementPage }) {
  return (
    <button className={css.Button} type="button" onClick={incrementPage}>
      Load more
    </button>
  );
}

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};
