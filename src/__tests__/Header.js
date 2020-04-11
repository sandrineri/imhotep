import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';

import Header from '../components/Header';

configure({ adapter: new Adapter() });

it('displays the header correctly', () => {
    const header = shallow(<Header />);
    
    expect(header.contains(
        <h1>Annonces immobilières</h1>
    )).toEqual(true);
});
