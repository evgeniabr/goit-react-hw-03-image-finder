import React from 'react'
import PropTypes from 'prop-types';

export  function Button({onClick}) {
  return (
   <Button className="Button" type="button" onClick={onClick}>
      Load more
    </Button>
  );
};

 Button.propTypes = {
  onClick: PropTypes.func.isRequired,
 };
