import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ setShowSettings }) => {
    return (
        <div className="header">
            <div className="header__title">Simple Chat App</div>
            <div className="header__settings" onClick={ () => setShowSettings(true) }>Settings</div>
        </div>
    );
};

Header.propTypes = {
    setShowSettings: PropTypes.func.isRequired
};

export default Header;
