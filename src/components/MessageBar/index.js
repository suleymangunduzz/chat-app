import React from 'react';
import PropTypes from 'prop-types';

const MessageBar = () => {
    return (
        <div className="message-bar">
            <textarea className="message-bar__input" placeholder="Enter a message..."/>
            <button className="message-bar__button">Send</button>
        </div>
    );
}

MessageBar.propTypes = {

}

export default MessageBar;
