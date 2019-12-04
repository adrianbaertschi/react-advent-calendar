import React from 'react';
import {render} from '@testing-library/react'
import Calendar from "./Calendar";
import renderer from 'react-test-renderer'

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