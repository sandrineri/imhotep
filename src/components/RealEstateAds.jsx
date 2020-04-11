import React from 'react';
import RealEstateAd from './RealEstateAd';

const RealEstateAds = (props) => {
    //console.log('RealEstateAds props: ', props);
    //console.log("inputSearchValue props: ", props.inputSearchValue);

    // Manage initial state (empty state)
    if (props.realEstateAdsArray.length === 0) {
        return (
            <React.Fragment>
                <div className="no-ads">
                    <p>Aucune annonce ne correspond à la recherche</p>
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="response-count">
                <span>
                    {props.adsCount}&nbsp;
                </span>
                annonces trouvées pour&nbsp;
                <span>
                    {props.inputSearchValue.join(', ')}&nbsp;{props.searchArea.join(', ')}
                </span>
            </div>

            <div className="real-ads-container">
                {props.realEstateAdsArray.map((ad => (<RealEstateAd key={ad._id} ad={ad} />)))}
            </div>
        </React.Fragment>
    );
};

export default RealEstateAds;
