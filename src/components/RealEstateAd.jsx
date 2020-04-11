import React, { useState } from 'react';
import { format } from 'date-fns';
import FsLightbox from 'fslightbox-react';


const RealEstateAd = (props) => {
    console.log('ad props: ', props);

    const [lightbox, setLightbox] = useState({
        toggler: false,
        slide: 1
    });

    const openLightbox = (tbhUrl, photos) => {
        let initialSlide = 1;
        photos.forEach((photo, index) => {
            if (photo.tbhUrl === tbhUrl) {
                initialSlide = index + 1;
            }
        });

        setLightbox({
            toggler: !lightbox.toggler,
            slide: initialSlide
        });
    };

    // Date of ad
    let dateHtml;
    if (props.ad._source.date_maj) {
        dateHtml = format(new Date(props.ad._source.date_maj), 'dd-MM-yyyy');
    } else {
        dateHtml = format(new Date(props.ad._source.date_creation), 'dd-MM-yyyy');
    }

    const adSource = (source) => {
        let permalien = '';
        if (source.includes('seloger')) permalien = 'SeLoger';
        return permalien;
    };

    return (
        <div className="real-ad-container">
            <div className="real-ad-sm-pics">
                {props.ad._source.photos.map(photo => (
                    <button className="real-ad-sm-pic" type="button" key={photo.tbhUrl} onClick={() => openLightbox(photo.tbhUrl, props.ad._source.photos)}>
                        <img src={photo.tbhUrl} alt="" />
                        <p className="pic-text">+</p>
                    </button>
                ))}
            </div>
            <div className="real-ad-big-pics">
                <FsLightbox
                    toggler={lightbox.toggler}
                    sources={props.ad._source.photos.map(photo => photo.urlbig || photo.tbhUrl)}
                    slide={lightbox.slide}
                />
            </div>
            <div className="real-ad-texts">
                <h3>{props.ad._source.libelle}</h3>
                <div className="real-ad_inline">
                    <p className="real-ad-location">{props.ad._source.cp}</p>
                    <p className="real-ad-surface">{props.ad._source.surface} m²</p>
                </div>
                <p className="real-ad-price">{props.ad._source.prix} €</p>
                <p className="real-ad-description">{props.ad._source.descriptif}</p>
                <p className="real-ad-source">Voir l'annonce sur&nbsp;
                    <a href={props.ad._source.permalien} target="_blank" rel="noopener noreferrer">{adSource(props.ad._source.permalien)}</a>
                </p>
                <p className="real-ad-date">Annonce en ligne au&nbsp;
                    <span id="date">
                        {dateHtml}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RealEstateAd;
