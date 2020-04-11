import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import { useAuth0 } from '../auth/Auth0Wrapper';

import Header from '../components/Header';
import Message from '../components/Message';
import AdsLocationsMap from '../components/AdsLocationsMap';
import SearchBar from '../components/SearchBar';
import SizeChooser from '../components/SizeChooser';
import PriceChooser from '../components/PriceChooser';
import DateChooser from '../components/DateChooser';
import ProvidersChooser from '../components/ProvidersChooser';
import AreaChooser from '../components/AreaChooser';
import NotificationsManager from '../components/NotificationsManager'
import RealEstateAds from '../components/RealEstateAds';

import settings from '../config/settings';


const Ads = () => {
    console.log('Ads !!!!!!!!!!!!!!!!!!!');
    const todayDate = format(new Date(), 'yyyy-MM-dd');
    const fortnightDate = format(new Date().setDate(new Date().getDate() - 15), 'yyyy-MM-dd');
    //console.log('fortnightDate: ', fortnightDate);

    // Initialize state
    const [errorMessage, setErrorMessage] = useState('');
    const [realEstateHitsArray, setRealEstateAdsArray] = useState([]);
    const [inputSearchValue, setInputSearchValue] = useState(["Paris"]);
    const [searchArea, setSearchArea] = useState([]);
    const [adDate, setAdDate] = useState({startDate: fortnightDate, endDate: todayDate});
    const [rentPrice, setRentPrice] = useState({minRentPrice: 500, maxRentPrice: 3000});
    const [buyPrice, setBuyPrice] = useState({ minBuyPrice: 200000, maxBuyPrice: 1000000 });
    const [size, setSize] = useState({ min: 30, max: 50 });
    const [providers, setProviders] = useState([]);

    const plop = useAuth0();
console.log(plop);

    // Set state from API
    useEffect(() => {
        //console.log(inputSearchValue);
        fetch(`${settings.apiBasePath}?keywords=${JSON.stringify(inputSearchValue)}&startDate="${adDate.startDate}"&endDate="${adDate.endDate}"&minRentPrice=${rentPrice.minRentPrice}&maxRentPrice=${rentPrice.maxRentPrice}&minBuyPrice=${buyPrice.minBuyPrice}&maxBuyPrice=${buyPrice.maxBuyPrice}&minSurface=${size.min}&maxSurface=${size.max}&cp=[]&providers=[]`)
            .then(response => response.json())
            .then((response) => {
                //console.log('fetch complete', response);

                //const realEstateTotalResponse = response.hits.total;
                //console.log('realEstateTotalResponse (total results from API): ', realEstateTotalResponse);
                
                const realEstateHitsArray = response.hits.hits;
                console.log('realEstateHitsArray', realEstateHitsArray);

                // Update state to "render" the components
                setRealEstateAdsArray(realEstateHitsArray);
            })
            .catch(error => {
                console.log(error);
                setRealEstateAdsArray([]);
                setErrorMessage('Il est mort Jim');
            });

    }, [inputSearchValue, searchArea, rentPrice, buyPrice, size, adDate, providers]);


    // If state is not empty, loading of components
    return (
        <React.Fragment>
            <Header />
            <Message message={errorMessage} />
            <div className="search-engine-container">
                <SearchBar
                    setInputSearchValue={setInputSearchValue}
                    inputSearchValue={inputSearchValue} />
                <AdsLocationsMap realEstateHitsArray={realEstateHitsArray} />
                <div className="options-container">
                    <AreaChooser setSearchArea={setSearchArea} />
                    <PriceChooser
                        buyPrice={buyPrice}
                        rentPrice={rentPrice}
                        setBuyPrice={setBuyPrice} 
                        setRentPrice={setRentPrice} />
                    <SizeChooser size={size} setSize={setSize} />
                    <DateChooser adDate={adDate} setAdDate={setAdDate} />
                    <ProvidersChooser setProviders={setProviders} />
                </div>
                <NotificationsManager inputSearchValue={inputSearchValue} searchArea={searchArea} size={size} setSize={setSize} adDate={adDate} buyPrice={buyPrice} rentPrice={rentPrice} providers={providers} />
            </div>
            <RealEstateAds realEstateHitsArray={realEstateHitsArray} inputSearchValue={inputSearchValue} setInputSearchValue={setInputSearchValue} searchArea={searchArea} />
        </React.Fragment>
    )
}

export default Ads;