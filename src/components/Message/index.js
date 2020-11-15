import React from 'react';
import PropTypes from 'prop-types';

import { classnames, hoursFormatter, checkURLContainsImage } from '../../utils';

const Message = ({ side, body, time, timeType, userName, type = 'message' }) => {
    const contentClass = classnames({
        'message__content': true,
        'message__content--info': type === 'info',
        [`message__content--${side}`]: side && type !== 'info'
    });

    const titleClass = classnames({
        'message__content__title': true,
        [`message__content__title--${side}`]: side
    });

    const renderMessageContents = () => {
        return type === 'info' ? <div>{ body }</div>  : <>
            <div className={ titleClass }>{`${userName} ${hoursFormatter(time, timeType)}`}</div>
            { checkURLContainsImage(body) ? <img src={body} /> : <div className="message__content__text">{ body }</div> }
        </>;
    }

    return (
        <div className="message">
            <div className={ contentClass }>
                { renderMessageContents() }
            </div>
        </div>
    );
}

Message.propTypes = {
    side: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    time: PropTypes.object.isRequired,
    timeType: PropTypes.number.isRequired
}

export default Message;
