import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import Header from './components/Header';
import Message from './components/Message';
import MessageBar from './components/MessageBar';
import MessageBox from './components/MessageBox';

import io from 'socket.io-client';

const App = () => {
    const [ userID, setUserID ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [ message, setMessage ] = useState('');

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect('http://localhost:8000');
        socketRef.current.on('user id', id => setUserID(id));
        socketRef.current.on('message', message => recievedMessage(message));
    }, []);

    const recievedMessage = message => {
        setMessages(prevMessages => [...prevMessages, message]);
    }

    const sendMessage = event => {
        event.preventDefault();

        if (message) {
            const messageObject = {
                body: message,
                id: userID
            };
    
            setMessage('');
            socketRef.current.emit('send message', messageObject);
        }
    }

    const handleMessageChange = event => {
        setMessage(event.target.value);
    }

    const renderMessages = () => {
        return messages.length ? messages?.map((message, index) => <Message
            key={ index }
            side={ message.id === userID ? 'right' : 'left' }
            text={ message.body } />)
            :
            <div className="empty-state">There is no messages yet !</div>
    }

    return (
        <div className="app">
            <Header />
            <MessageBox>
                { renderMessages() }
            </MessageBox>
            <MessageBar
                sendMessage={ sendMessage }
                handleMessageChange={ handleMessageChange }
                message={ message } />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
