import React from 'react';
import renderer from 'react-test-renderer';
import Message from './index';

test('Message should be rendered on the right side', () => {
    const side = 'right';
    const body = 'Some text message';
    const time = { hours: 17, minutes: 40 };
    const timeType = 24;
    const userName = 'Süleyman GÜNDÜZ';
    const type = 'message';

    const component = renderer.create(<Message side={side} time={time} body={body} timeType={timeType} userName={userName} type={type}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Message should be rendered on the left side', () => {
    const side = 'left';
    const body = 'Some text message';
    const time = { hours: 17, minutes: 40 };
    const timeType = 24;
    const userName = 'Süleyman GÜNDÜZ';
    const type = 'message';

    const component = renderer.create(<Message side={side} time={time} body={body} timeType={timeType} userName={userName} type={type}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Message should be rendered with info type', () => {
    const side = 'left';
    const body = 'Some text message';
    const time = { hours: 17, minutes: 40 };
    const timeType = 24;
    const userName = 'Süleyman GÜNDÜZ';
    const type = 'info';

    const component = renderer.create(<Message side={side} time={time} body={body} timeType={timeType} userName={userName} type={type}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});