import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import './styles/index.scss';
import Modal from './components/Modal';
import Header from './components/Header';
import Message from './components/Message';
import MessageBar from './components/MessageBar';
import MessageBox from './components/MessageBox';

const App = () => {
    const [ userID, setUserID ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [ message, setMessage ] = useState('');
    const [ showSettings, setShowSettings ] = useState(false);

    // Default settings values.
    const [ timeType, setTimeType ] = useState(12);
    const [ sendMessageFromKeyboard, setSendMessageFromKeyboard ] = useState(true);

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect('http://localhost:8000');
        socketRef.current.on('user id', id => setUserID(id));
        socketRef.current.on('message', message => recievedMessage(message));
    }, []);

    const recievedMessage = message => {
        setMessages(prevMessages => [...prevMessages, message]);
    };

    const sendMessage = () => {
        if (message) {
            const date = new Date();

            const messageObject = {
                body: message,
                id: userID,
                time: {
                    hours: date.getHours(),
                    minutes: date.getMinutes()
                }
            };
    
            setMessage('');
            socketRef.current.emit('send message', messageObject);
        }
    };

    const handleMessageChange = event => {
        setMessage(event.target.value);
    };

    const renderMessages = () => {
        return messages.length ? messages?.map((message, index) => <Message
            key={ index }
            side={ message.id === userID ? 'right' : 'left' }
            text={ message.body }
            time={ message.time }
            timeType={ timeType } />)
            :
            <div className="empty-state">There is no messages yet !</div>
    };

    return (
        <div className="app">
            <Header setShowSettings={ setShowSettings }/>
            <MessageBox>
                { renderMessages() }
            </MessageBox>
            <MessageBar
                sendMessage={ sendMessage }
                handleMessageChange={ handleMessageChange }
                message={ message } />
            <Modal
                show={ showSettings }
                setShowSettings={ setShowSettings }
                setTimeType={ setTimeType }
                timeType={ timeType }
                sendMessageFromKeyboard={ sendMessageFromKeyboard }
                setSendMessageFromKeyboard={ setSendMessageFromKeyboard } />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
