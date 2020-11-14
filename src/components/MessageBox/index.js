import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({ messages }) => {
    return (
        <div className="message-box">
            { messages }
        </div>
    );
};

MessageBox.propTypes = {
    messages: PropTypes.array.isRequired
};

export default MessageBox;
