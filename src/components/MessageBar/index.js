import React from 'react';
import PropTypes from 'prop-types';

const MessageBar = ({ sendMessage, handleMessageChange, message }) => {
    return (
        <div className="message-bar">
            <textarea className="message-bar__input" placeholder="Enter a message..." onChange={handleMessageChange} value={ message }/>
            <button className="message-bar__button" onClick={ sendMessage }>Send</button>
        </div>
    );
}

MessageBar.propTypes = {
    sendMessage: PropTypes.func,
    handleMessageChange: PropTypes.func,
    message: PropTypes.string
}

export default MessageBar;
