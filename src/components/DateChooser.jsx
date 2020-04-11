import React from 'react';
import { format } from 'date-fns';
import moment from 'moment';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';

import settings from '../config/settings';

require('moment/locale/fr');

const DateChooser = (props) => {
    //console.log('DateChooser props: ', props);

    const start = new Date(props.adDate.startDate);
    const end = new Date(props.adDate.endDate);
    //console.log('start', start);

    return (
        <div className="option-container">
            <label className="option-label" htmlFor="start">Chercher par dates :</label>
            <DateRangePicker
                numberOfCalendars={2}
                selectionType='range'
                locale={settings.countryCode}
                maximumDate={new Date()}
                onSelect={(values) => props.setAdDate({
                    startDate: format(values.start._i, 'yyyy-MM-dd'),
                    endDate: format(values.end._i, 'yyyy-MM-dd')
                })}
                value={moment().range(start, end)}
            />
            <div>
                <input readOnly value={format(start, 'dd-MM-yyyy')}></input>
                <input readOnly value={format(end, 'dd-MM-yyyy')}></input>
            </div>
        </div>
    )
}

export default DateChooser;