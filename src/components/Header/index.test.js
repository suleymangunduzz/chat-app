import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

const mockSetShowSettings = jest.fn();

test('Header component render', () => {
    const component = renderer.create(<Header setShowSettings={ mockSetShowSettings } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});