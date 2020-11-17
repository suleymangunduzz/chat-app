import React from 'react';
import renderer from 'react-test-renderer';
import MessageBar from './index';

const mockSendMessage = jest.fn();
const mockHandleMessageChange = jest.fn();

test('MessageBar component render', () => {
    
const mockSendMessageFromKeyboard = true;
const mockMessage = 'Mock message text.';

    const component = renderer.create(
        <MessageBar
            sendMessage={mockSendMessage}
            handleMessageChange={mockHandleMessageChange}
            sendMessageFromKeyboard={mockSendMessageFromKeyboard}
            message={mockMessage}
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});