import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({ messageBoxRef, messages }) => {
    return (
        <div ref={ messageBoxRef } className="message-box">
            { messages }
        </div>
    );
};

MessageBox.propTypes = {
    messages: PropTypes.array.isRequired,
    messageBoxRef: PropTypes.object
};

export default MessageBox;
