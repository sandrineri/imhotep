// Libraries
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useAuth0 } from '../auth/Auth0Wrapper';

// Local files
import settings from '../config/settings';

// Components
import Connect from '../components/Connect';
import Header from '../components/Header';
import Message from '../components/Message';
import AdsLocationsMap from '../components/AdsLocationsMap';
import SearchBar from '../components/SearchBar';
import SurfaceAreaChooser from '../components/SurfaceAreaChooser';
import PriceChooser from '../components/PriceChooser';
import DateChooser from '../components/DateChooser';
import ProvidersChooser from '../components/ProvidersChooser';
import AreaChooser from '../components/AreaChooser';
import NotificationsManager from '../components/NotificationsManager';
import RealEstateAds from '../components/RealEstateAds';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const Ads = () => {
    // Format dates
    const todayDate = format(new Date(), 'yyyy-MM-dd');
    const fortnightDate = format(new Date().setDate(new Date().getDate() - 15), 'yyyy-MM-dd');

    // Initialize state
    const [errorMessage, setErrorMessage] = useState('');
    const [realEstateAdsArray, setRealEstateAdsArray] = useState([]);
    const [inputSearchValue, setInputSearchValue] = useState(['Paris']);
    const [searchArea, setSearchArea] = useState([]);
    const [adDate, setAdDate] = useState({ startDate: fortnightDate, endDate: todayDate });
    const [rentPrice, setRentPrice] = useState({ minRentPrice: 750, maxRentPrice: 2250 });
    const [buyPrice, setBuyPrice] = useState({ minBuyPrice: 312500, maxBuyPrice: 937500 });
    const [surfaceArea, setSurfaceArea] = useState({ min: 70, max: 140 });
    const [adProviders, setAdProviders] = useState([]);
    const [pagination, setPagination] = useState(0);
    const [adsCount, setAdsCount] = useState(0);
    const [size, setSize] = useState(20);
    const [accessToken, setAccessToken] = useState(null);
    const [choicesContainerDisplay, setChoicesContainerDisplay] = useState('choices-container-down');
    const [choisesArrowDisplay, setChoicesArrowDisplay] = useState('');

    // Authorization hook with Auth0
    const { isAuthenticated, getTokenSilently } = useAuth0();
    if (isAuthenticated) {
        getTokenSilently().then(token => {
            setAccessToken(token);
            //console.log('ads token: ', token);
        });
    }

    // Set state from API
    useEffect(() => {
        if (accessToken === null) return;
        //console.log('useEffect');

        // Stringify arrays of values
        const keywords = JSON.stringify(inputSearchValue);
        const cp = JSON.stringify(searchArea);
        const providers = JSON.stringify(adProviders);

        fetch(`${settings.apiBasePath}?keywords=${keywords}&startDate="${adDate.startDate}"&endDate="${adDate.endDate}"&minRentPrice=${rentPrice.minRentPrice}&maxRentPrice=${rentPrice.maxRentPrice}&minBuyPrice=${buyPrice.minBuyPrice}&maxBuyPrice=${buyPrice.maxBuyPrice}&minSurface=${surfaceArea.min}&maxSurface=${surfaceArea.max}&cp=${cp}&providers=${providers}&from=${pagination}&size=${size}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then((response) => {
                console.log('fetch response: ', response);
                setAdsCount(response.hits.total.value);
                setRealEstateAdsArray(response.hits.hits);
            })
            .catch(error => {
                console.log(error);
                setRealEstateAdsArray([]);
                setErrorMessage('Il est mort Imhotep');
            });
    }, [inputSearchValue, searchArea, rentPrice, buyPrice, surfaceArea, adDate, adProviders, pagination, accessToken, size]);


    const displayChoicesContainer = () => {
        if (choicesContainerDisplay === 'choices-container-down') {
            setChoicesContainerDisplay('choices-container-up');
            setChoicesArrowDisplay('choices-arrow-up');
        } else {
            setChoicesContainerDisplay('choices-container-down');
            setChoicesArrowDisplay('');
        }
    };

    // If state is not empty, loading of components
    if (accessToken === null) {
        return (
            <React.Fragment>
                <div>
                    <Connect accessToken={accessToken} setAccessToken={setAccessToken} />
                    <Header setAccessToken={setAccessToken} accessToken={accessToken} />
                </div>

                <div className="home" />
                <Footer />
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div>
                <Connect setAccessToken={setAccessToken} />
                <Header setAccessToken={setAccessToken} accessToken={accessToken} />
            </div>
            <div className="ads">
                <Message message={errorMessage} />
                <article className="main-container">
                    <section className="choices-container">
                        <div>
                            <div className={`contain search-engine-container ${choicesContainerDisplay}`}>
                                <div className="options-container">
                                    <SearchBar
                                        setInputSearchValue={setInputSearchValue}
                                        inputSearchValue={inputSearchValue}
                                    />
                                    <AreaChooser setSearchArea={setSearchArea} />
                                </div>

                                <div className="options-container">
                                    <PriceChooser
                                        buyPrice={buyPrice}
                                        rentPrice={rentPrice}
                                        setBuyPrice={setBuyPrice}
                                        setRentPrice={setRentPrice}
                                    />
                                </div>

                                <div className="options-container">
                                    <SurfaceAreaChooser surfaceArea={surfaceArea} setSurfaceArea={setSurfaceArea} />
                                </div>

                                <div className="options-container">
                                    <DateChooser adDate={adDate} setAdDate={setAdDate} />
                                </div>

                                <div className="options-container">
                                    <ProvidersChooser setAdProviders={setAdProviders} />
                                </div>

                                <div className="options-container">
                                    <NotificationsManager
                                        inputSearchValue={inputSearchValue}
                                        searchArea={searchArea}
                                        surfaceArea={surfaceArea}
                                        setSurfaceArea={setSurfaceArea}
                                        adDate={adDate}
                                        buyPrice={buyPrice}
                                        rentPrice={rentPrice}
                                        adProviders={adProviders}
                                        accessToken={accessToken}
                                    />
                                </div>
                            </div>

                            <div className={`close-options ${choisesArrowDisplay}`}>
                                <button type="button" onClick={displayChoicesContainer}>
                                    <img src="/images/dropup-white.png" alt="Fermer le module d'options" title="Fermer le module d'options" />
                                </button>
                            </div>
                        </div>

                        <div className="contain map-container">
                            <AdsLocationsMap realEstateAdsArray={realEstateAdsArray} />
                        </div>
                    </section>

                    <section className="real-ads-container">
                        <RealEstateAds realEstateAdsArray={realEstateAdsArray} inputSearchValue={inputSearchValue} setInputSearchValue={setInputSearchValue} searchArea={searchArea} adsCount={adsCount} />
                        <div className="pagination-container">
                            <Pagination adsCount={adsCount} setPagination={setPagination} pagination={pagination} realEstateAdsArrayLength={realEstateAdsArray.length} setSize={setSize} size={size} />
                        </div>
                    </section>
                </article>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Ads;
