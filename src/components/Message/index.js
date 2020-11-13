import React from 'react';
import PropTypes from 'prop-types';

import { classnames } from '../../utils';

const Message = ({ side, text, userName, time }) => {
    const contentClass = classnames({
        'message__content': true,
        [`message__content--${side}`]: side
    });

    const titleClass = classnames({
        'message__content__title': true,
        [`message__content__title--${side}`]: side
    });

    return (
        <div className="message">
            <div className={ contentClass }>
                <div className={ titleClass }>Guest 001 13:55</div>
                <div className="message__content__text">{ text }</div>
            </div>
        </div>
    );
}

Message.propTypes = {
    side: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}

export default Message;
