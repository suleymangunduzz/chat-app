import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import Header from './components/Header';
import Message from './components/Message';
import MessageBar from './components/MessageBar';
import MessageBox from './components/MessageBox';

const App = () => {
    return (
        <div className="app">
            <Header />
            <MessageBox>
                <Message side="left" />
                <Message side="right" />
                <Message side="right" />
                <Message side="left" />
                <Message side="left" />
                <Message side="right" />
                <Message side="right" />
                <Message side="left" />
                <Message side="left" />
                <Message side="right" />
                <Message side="right" />
                <Message side="left" />
                <Message side="left" />
                <Message side="right" />
                <Message side="right" />
                <Message side="left" />
            </MessageBox>
            <MessageBar />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
