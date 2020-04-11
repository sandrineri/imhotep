import React, { useState } from 'react';
import Select from 'react-select';

import settings from '../config/settings';

const options = [
    { value: '1h', label: 'Toutes les heures' },
    { value: '1j', label: 'Une fois par jour' },
    { value: '1s', label: 'Une fois par semaine' }
];

let notifFrequency = options[1].value;
const getNotifFrequency = (value) => {
    console.log('frequency value: ', value);
    notifFrequency = value;
};

// Send object with infos to API
const sendData = (notificationsObject, accessToken) => {
    console.log(notificationsObject);
    fetch(`${settings.apiBasePath}/subscribe`, {
        method: 'POST',
        body: JSON.stringify(notificationsObject),
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log('envoyé', response);
        })
        .catch(error => {
            console.log('Erreur de mise à jour : ', error);
        });
};

// Create an object containing infos to send
const submitSendBtn = (props) => {
    const notificationsObject = {
        notificationFrequency: notifFrequency,
        searchInput: props.inputSearchValue,
        cp: props.searchArea,
        minBuyPrice: props.buyPrice.minBuyPrice,
        maxBuyPrice: props.buyPrice.maxBuyPrice,
        minRentPrice: props.rentPrice.minRentPrice,
        maxRentPrice: props.rentPrice.maxRentPrice,
        minSurface: props.surfaceArea.min,
        maxSurface: props.surfaceArea.max,
        startDate: props.adDate.startDate,
        endDate: props.adDate.endDate,
        providers: props.adProviders
    };

    sendData(notificationsObject, props.accessToken);
};

const NotificationsManager = (props) => {
        const [notifsChooserDisplay, setNotifsChooserDisplay] = useState('notif-alert-choices-up');
        const [notifArrowDown, setNotifArrowDown] = useState('');

        // Eventlistener on button to open/close the notification registration option
        const openNotifChoices = () => {
            if (notifsChooserDisplay === 'notif-alert-choices-up') {
                setNotifsChooserDisplay('notif-alert-choices-down');
                setNotifArrowDown('drop-arrow-active');
            } else {
                setNotifsChooserDisplay('notif-alert-choices-up');
                setNotifArrowDown('');
            }
        };

        return (
            <div className="option-container notifs-container">
                <button type="button" className="notif-alert" onClick={openNotifChoices}>
                    <p>Créez une alerte</p>
                    <img className={`drop-arrow ${notifArrowDown}`} src="/images/dropdown-white.png" alt="Ouvrir" title="Ouvrir" />
                </button>

                <div className={`${notifsChooserDisplay}`}>
                    <div>
                        <div className="option-sub">
                            <p className="option-label">Fréquence des notifications</p>
                        </div>

                        <Select
                            className="select"
                            defaultValue={options[1]}
                            options={options}
                            onChange={(option) => getNotifFrequency(option.value)}
                        />
                    </div>

                    <div className="notif-btn">
                        <button type="button" onClick={() => submitSendBtn(props)}>Valider</button>
                    </div>
                </div>
            </div>
        );
    };

    export default NotificationsManager;
