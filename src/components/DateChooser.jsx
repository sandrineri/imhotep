import React from 'react';
import { format } from 'date-fns';
import moment from 'moment';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';

import settings from '../config/settings';

require('moment/locale/fr');

const DateChooser = (props) => {
    const start = new Date(props.adDate.startDate);
    const end = new Date(props.adDate.endDate);

    return (
        <div className="option-container date-chooser">
            <div className="option-sub">
                <p className="option-label" htmlFor="start">Chercher par dates :</p>
                <p id="start" className="chosen">du&nbsp;
                    <span>
                        {format(start, 'dd-MM-yyyy')}
                    </span>
                    &nbsp;au&nbsp;
                    <span>{format(end, 'dd-MM-yyyy')}</span>
                    &nbsp;
                </p>
            </div>

            <DateRangePicker
                className="select"
                id="start"
                numberOfCalendars={2}
                selectionType="range"
                locale={settings.countryCode}
                maximumDate={new Date()}
                onSelect={(values) => props.setAdDate({
                    startDate: format(values.start._i, 'yyyy-MM-dd'),
                    endDate: format(values.end._i, 'yyyy-MM-dd')
                })}
                value={moment().range(start, end)}
            />
        </div>
    );
};

export default DateChooser;
