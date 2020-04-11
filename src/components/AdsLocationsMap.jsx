import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import settings from '../config/settings';


const style = {
    width: '600px',
    height: '400px',
};

const markerInfosInitialState = {
    selectedPlace: '',
    activeMarker: {},
    showingInfoWindow: false
};

const AdsLocationsMap = (props) => {
    console.log('AdsLocationsMap props: ', props);
    
    const [markerInfos, setMarkerInfos] = useState(markerInfosInitialState);

    const onMarkerClick = (props, marker) => {
        console.log(marker);
        setMarkerInfos({
            selectedPlace: props.title,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    const onInfoWindowClose = () => {
        setMarkerInfos(markerInfosInitialState);
    };
    
    //console.log('markerInfos: ', markerInfos.selectedPlace, markerInfos.activeMarker, markerInfos.showingInfoWindow);

    return (
        <div className="map">
            <Map 
                google={props.google} 
                zoom={12} style={style}
                initialCenter={{
                    lat: 48.8534,
                    lng: 2.3488
                }}
            >
                {props.realEstateHitsArray.map((ad) => {
                    return (
                    <Marker
                        key={ad._id}
                        onClick={onMarkerClick}
                        title={ad._source.titre}
                        //name={'Paris'}
                        position={{lat: 48.8534, lng:  2.3488}}
                    />
                    )
                })}

                    <InfoWindow onClose={onInfoWindowClose} visible={markerInfos.showingInfoWindow} marker={markerInfos.activeMarker}>
                        <div>
                            <p>{markerInfos.selectedPlace}</p>
                        </div>
                    </InfoWindow>
            </Map>
        </div>
    );
};

export default GoogleApiWrapper ({
    apiKey: ('AIzaSyDWrdP5HzLSQgJ7e3KDJpj-bZFsJu0QQHA'),
    language: settings.countryCode
})(AdsLocationsMap);