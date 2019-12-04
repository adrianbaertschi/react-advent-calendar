import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'
import Calendar from "./Calendar";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('renders the title', async () => {
    let {getByText} = render(<App/>);
    expect(getByText('Calendar')).toBeDefined()
});
