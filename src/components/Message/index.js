import React from 'react';
import PropTypes from 'prop-types';

import { classnames, hoursFormatter, checkURLContainsImage } from '../../utils';

const Message = ({ side, text, time, timeType, userName }) => {
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
                <div className={ titleClass }>{`${userName} ${hoursFormatter(time, timeType)}`}</div>
                 { checkURLContainsImage(text) ? <img src={text} /> : <div className="message__content__text">{ text }</div> }
            </div>
        </div>
    );
}

Message.propTypes = {
    side: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    time: PropTypes.object.isRequired,
    timeType: PropTypes.number.isRequired
}

export default Message;
