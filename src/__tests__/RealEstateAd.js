import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';

import RealEstateAd from '../components/RealEstateAd';
import { normalAd, adWithoutDateMaj} from './mocks/mocks';

configure({ adapter: new Adapter() });


it('displays one normal ad correctly', () => {
    const realEstateAd = shallow(<RealEstateAd ad={normalAd} />);

    //console.log(realEstateAd.find('.real-ad-container').html());    
    expect(realEstateAd.find('#date').text()).toEqual('22-02-2019');
});

it('displays one broken ad correctly', () => {
    const realEstateAd = shallow(<RealEstateAd ad={adWithoutDateMaj} />);

    //console.log(realEstateAd.find('.real-ad-container').html());    
    expect(realEstateAd.find('#date').text()).toEqual('20-02-2019');
});

