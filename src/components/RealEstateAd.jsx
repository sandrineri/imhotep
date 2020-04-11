import React, { useState } from 'react';
import { format } from 'date-fns';
import FsLightbox from 'fslightbox-react';


const RealEstateAd = (props) => {
    const [lightbox, setLightbox] = useState({
        toggler: false,
        slide: 1
    });

    const openLightbox = (tbhUrl, photos) => {
        let initialSlide = 1;
        photos.forEach((photo, index) => {
            if (photo.tbhUrl === tbhUrl) {
                initialSlide = index+1;
            }
        });

        setLightbox({
            toggler: !lightbox.toggler,
            slide: initialSlide
        });
    }

    // Date of ad
    let dateHtml;
    if (props.ad._source.date_maj) {
        dateHtml = format(new Date(props.ad._source.date_maj), 'dd-MM-yyyy');
        //console.log('majDateHtml if majDate :', majDateHtml);
    }   
    else {
        dateHtml = format(new Date(props.ad._source.date_creation), 'dd-MM-yyyy');
        //console.log('majDateHtml else :', majDateHtml);
    }
    
    
    return (
        <div className="real-ad-container">
            <h3>{props.ad._source.libelle}</h3>
            <p className="real-ad-description">{props.ad._source.descriptif}</p>
            <p>Surface : <span>{props.ad._source.surface}</span> m²</p>
            <p>Prix&nbsp;: <span>{props.ad._source.prix}</span> €</p>
            <p>Code postal&nbsp;:&nbsp; 
                <span>
                    {props.ad._source.cp}
                </span>
            </p>
            <a href={props.ad._source.permalien} target="_blank" rel="noopener noreferrer">{props.ad._source.permalien}</a>
            <p>Annonce en ligne au&nbsp;
                <span id="date">
                    {dateHtml}
                </span>
            </p>
            <div className="real-ad-sm-pics">
                {props.ad._source.photos.map(photo => (
                    <img key={photo.tbhUrl} src={photo.tbhUrl} alt="" onClick={() => openLightbox(photo.tbhUrl, props.ad._source.photos)}></img>
                ))}
            </div>
            <div className="real-ad-big-pics">
                <FsLightbox
                    toggler={lightbox.toggler}
                    sources={props.ad._source.photos.map(photo => {
                        return photo.urlbig || photo.tbhUrl;
                    })}
                    slide={lightbox.slide}
                />
            </div>

        </div>
    )
}

export default RealEstateAd;