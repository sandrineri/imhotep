import React, { useState } from 'react';
import {
    Map, InfoWindow, Marker, GoogleApiWrapper
} from 'google-maps-react';

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
    const [markerInfos, setMarkerInfos] = useState(markerInfosInitialState);

    const onMarkerClick = (marker) => {
        setMarkerInfos({
            selectedPlace: props.title,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    const onInfoWindowClose = () => {
        setMarkerInfos(markerInfosInitialState);
    };

    return (
        <div className="map">
            <Map
                google={props.google}
                zoom={12} style={style}
                initialCenter={{
                    lat: 48.8586,
                    lng: 2.3426
                }}
            >
                {/* <Marker
                    name="Paris"
                    position={{ lat: 48.8534, lng: 2.3488 }}
                /> */}
                {props.realEstateAdsArray.map((ad) => (
                    <Marker
                        key={ad._id}
                        onClick={onMarkerClick}
                        title={ad._source.titre}
                        //name="Paris"
                        position={{ lat: 48.8534, lng: 2.3488 }}
                    />
                    ))}

                    <InfoWindow onClose={onInfoWindowClose} visible={markerInfos.showingInfoWindow} marker={markerInfos.activeMarker}>
                        <div>
                            <p>{markerInfos.selectedPlace}</p>
                        </div>
                    </InfoWindow>
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: (settings.googleApiKey),
    language: settings.countryCode
})(AdsLocationsMap);
