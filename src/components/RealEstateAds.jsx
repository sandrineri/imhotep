import React from 'react';
import RealEstateAd from './RealEstateAd';

const RealEstateAds = (props) => {
    //console.log('RealEstateAds props: ', props);
    //console.log("inputSearchValue props: ", props.inputSearchValue);
    
    // Manage initial state (empty state)
    if (props.realEstateHitsArray.length === 0) {
        return (
            <article className="real-estate-ads-container" id="real-estate-ads">
                <div>
                    <p>Aucune annonce ne correspond à votre recherche...</p>
                </div>
            </article>
        );
    }

    return (
        <article className="real-estate-ads-container" id="real-estate-ads">
            <h2>
                <span>
                    {props.realEstateHitsArray.length}&nbsp;
                </span> 
                annonces trouvées pour&nbsp;
                <span>
                    {props.inputSearchValue.join(', ')}&nbsp;{props.searchArea.join(', ')}
                </span>
            </h2>
            
            <div>
                {props.realEstateHitsArray.map((ad => (<RealEstateAd key={ad._id} ad={ad} />)))}
            </div>
        </article>
    )
}

export default RealEstateAds;