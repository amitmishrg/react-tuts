import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Header = (props) => {
  return (
    <header>
      <h4>{props.name}</h4>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string
};
export default Header;
