import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MessageBar = ({
    sendMessage,
    handleMessageChange,
    sendMessageFromKeyboard,
    message
}) => {
    const [ keys, setKeys ] = useState([]);

    useEffect(() => {
        document.addEventListener('keydown', keyPressHandler);
        document.addEventListener('keyup', keyPressClean);

        return () => {
            window.removeEventListener('keydown', keyPressHandler);
            window.removeEventListener('keyup', keyPressClean);
        };
    }, []);

    useEffect(() => {
        if (keys.length >= 2 && keys[keys.length-2] === 'Meta' && keys[keys.length-1] === 'Enter' && sendMessageFromKeyboard) {
            sendMessage();
        }
    }, [keys]);

    const keyPressHandler = (event) => {
        setKeys(keys => [...keys, event.key])
    }

    const keyPressClean = () => {
        setKeys([]);
    }


    return (
        <div className="message-bar">
            <textarea className="message-bar__input" placeholder="Enter a message..." onChange={handleMessageChange} value={ message } />
            <button className="message-bar__button" onClick={ sendMessage }>Send</button>
        </div>
    );
}

MessageBar.propTypes = {
    sendMessage: PropTypes.func,
    handleMessageChange: PropTypes.func,
    message: PropTypes.string,
    sendMessageFromKeyboard: PropTypes.bool
}

export default MessageBar;
