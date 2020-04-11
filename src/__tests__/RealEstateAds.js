import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';

import RealEstateAds from '../components/RealEstateAds';
import { normalAd, adWithoutDateMaj } from './mocks/mocks';

configure({ adapter: new Adapter() });

it('displays the ads correctly', () => {
    const realEstateAds = mount(<RealEstateAds realEstateHitsArray={[normalAd]} inputSearchValue={["test"]} />);    
    expect(realEstateAds.find('.real-ad-container').length).toEqual(1);
    expect(realEstateAds.find('.real-ad-container').html().includes('<h3>Immeuble ancien, au calme, parfait état !</h3>'));
});



it('displays the ads with appropriate size correctly', () => {
    const realEstateAds = mount(<RealEstateAds realEstateHitsArray={[adWithoutDateMaj]} inputSearchValue={["test"]} />);
    expect(realEstateAds.find('.real-ad-container').length).toEqual(1);
});