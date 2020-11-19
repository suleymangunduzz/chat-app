import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import './styles/index.scss';
import Modal from './components/Modal';
import Header from './components/Header';
import Message from './components/Message';
import MessageBar from './components/MessageBar';
import MessageBox from './components/MessageBox';

export const App = () => {
    const [ userID, setUserID ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [ message, setMessage ] = useState('');
    const [ showSettings, setShowSettings ] = useState(false);

    // Default settings values, if exist, get from localStorage first !
    const [ timeType, setTimeType ] = useState(+localStorage.getItem('timeType') || 12);
    let defaultKeyboard = localStorage.getItem('keyboard') === 'false' ? false : true;
    const [ sendMessageFromKeyboard, setSendMessageFromKeyboard ] = useState(defaultKeyboard);

    const socketRef = useRef();
    const messageBoxRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect(SOCKET_URL);
        socketRef.current.on('user id', id => setUserID(id));
        socketRef.current.emit('join');
        socketRef.current.on('message', message => recievedMessage(message));
        socketRef.current.on('update', updateMessage => recievedMessage(updateMessage));
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages])

    const recievedMessage = message => {
        setMessages(prevMessages => [...prevMessages, message]);
    };

    const scrollToBottom = () => {
        const scrollHeight = messageBoxRef.current.scrollHeight;
        const height = messageBoxRef.current.clientHeight;
        const maxScrollTop = scrollHeight - height;
        messageBoxRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

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
                timeType={ timeType }
                { ...message } />)
            :
            <div className="empty-state">There are no messages yet !</div>
    };    

    return (
        <div className="app">
            <Header setShowSettings={ setShowSettings }/>
            <MessageBox messageBoxRef={ messageBoxRef} messages={ renderMessages() } />
            <MessageBar
                sendMessage={ sendMessage }
                handleMessageChange={ handleMessageChange }
                message={ message }
                sendMessageFromKeyboard={ sendMessageFromKeyboard } />
            <Modal
                show={ showSettings }
                setShowSettings={ setShowSettings }
                setTimeType={ setTimeType }
                timeType={ timeType }
                sendMessageFromKeyboard={ sendMessageFromKeyboard }
                setSendMessageFromKeyboard={ setSendMessageFromKeyboard }
                socketRef={ socketRef } />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
