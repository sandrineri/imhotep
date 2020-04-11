import React from 'react';
import Select from 'react-select';

const options = [
    { value: '1h', label: 'Toutes les heures' },
    { value: '1j', label: 'Une fois par jour'},
    { value: '1s', label: 'Une fois par semaine' }
]

let email = "";
const getEmail = (value) => {
    //console.log(value);
    email = value;
}

let notifFrequency = options[1].value;
const getNotifFrequency = (value) => {
    console.log('frequency value: ', value);
    notifFrequency = value;
}

const submitSendBtn = (props) => {
    const notificationsObject = {
        'email': email,
        'notificationFrequency': notifFrequency,
        'searchInput': props.inputSearchValue,
        'cp': props.searchArea,
        'minBuyPrice': props.buyPrice.minBuyPrice,
        'maxBuyPrice': props.buyPrice.maxBuyPrice,
        'minRentPrice': props.rentPrice.minRentPrice,
        'maxRentPrice': props.rentPrice.maxRentPrice,
        'minSurface': props.size.min,
        'maxSurface': props.size.max,
        'startDate': props.adDate.startDate,
        'endDate': props.adDate.endDate,
        'providers': props.adProviders
    }
    console.log('Object to send: ', notificationsObject)
}

const NotificationsManager = (props) => {
    console.log('NotificationsManager props', props);
    
    return (

        <div className="options-container">
            <p>Recevoir les annonces correspondantes à vos critères : </p>
            <div>
                <div>
                    <label className="option-label">E-mail :</label>
                    <input
                        type="email"
                        placeholder="monadresse@monmail.com"
                        onChange={e => getEmail(e.target.value)}>
                    </input>
                </div>

                <div>
                    <div>
                        <label className="option-label">Fréquence des notifications :</label>
                        <Select value={options[1]} options={options} onChange={(option) => getNotifFrequency(option.value)} />
                    </div>

                    <div>
                        <input type="button" value="Valider" onClick={() => submitSendBtn(props)}></input>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NotificationsManager;