import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';

import SearchBar from '../components/SearchBar';

configure({ adapter: new Adapter() });

it('displays the searchbar correctly', () => {
    const searchBar = shallow(<SearchBar />);
    expect(searchBar.find('input').props().defaultValue).toEqual('test');
});
