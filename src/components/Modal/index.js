import React from 'react';
import PropTypes from 'prop-types';

import { classnames } from '../../utils';

const Modal = ({
    show,
    setShowSettings,
    timeType,
    sendMessageFromKeyboard,
    setTimeType,
    setSendMessageFromKeyboard
}) => {
    const modalClass = classnames({
        'modal': true,
        'modal--off': !show
    });

    const handleTime = (event) => {
        setTimeType(+event.target.id);
    };

    const handleKeyboard = (event) => {
        setSendMessageFromKeyboard(event.target.id === 'sendMessageFromKeyboard');
    };

    const resetToDefault = () => {
        setTimeType(12);
        setSendMessageFromKeyboard(true);
    }

    return (
        <div className={ modalClass }>
            <div className="modal__content">
                <span>Clock Display</span>
                <div className="modal__content__container">
                <div>
                    <input type="radio" id="12" name="timeType" value="12" checked={ timeType === 12 } onChange={ handleTime } />
                    <label for="12">12 Hours</label>
                </div>
                <div>
                    <input type="radio" id="24" name="timeType" value="24" checked={ timeType === 24 } onChange={ handleTime } />
                    <label for="24">24 Hours</label>
                </div>
                </div>
                <span>Send Messages On Cmd + Enter</span>
                <div className="modal__content__container">
                <div>
                    <input type="radio" id="sendMessageFromKeyboard" name="keyboard" value={true} checked={ sendMessageFromKeyboard } onChange={ handleKeyboard } />
                    <label for="On">On</label>
                </div>
                <div>
                    <input type="radio" id="dontSendMessageFromKeyboard" name="keyboard" value={false} checked={ !sendMessageFromKeyboard } onChange={ handleKeyboard } />
                    <label for="Off">Off</label>
                </div>
                </div>
            </div>

            <div className="modal__actions">
                <button className="toggle-button" onClick={ resetToDefault }>Reset to default</button>
                <button className="toggle-button" onClick={ () => setShowSettings(false) }>Close</button>
            </div>
        </div>
    );
};

Modal.propTypes = {
    timeType: PropTypes.number,
    show: PropTypes.bool.isRequired,
    showSettings: PropTypes.bool.isRequired,
    sendMessageFromKeyboard: PropTypes.bool.isRequired,
    setTimeType: PropTypes.func.isRequired,
    setShowSettings: PropTypes.func.isRequired
};

export default Modal;
