import React from 'react';
import {render} from '@testing-library/react'
import Calendar from "./Calendar";
import renderer from 'react-test-renderer'

beforeAll(() => {
    return Date.now = jest.fn(() => new Date(Date.UTC(2019, 11, 4)).valueOf());
});

test('renders 24 fields', async () => {
    const {getAllByText} = render(<Calendar/>);
    expect(getAllByText(/\d/)).toHaveLength(24)
});

test('renders calendar like snapshot', async () => {
    const tree = renderer
        .create(<Calendar/>)
        .toJSON();
    expect(tree).toMatchSnapshot()
});