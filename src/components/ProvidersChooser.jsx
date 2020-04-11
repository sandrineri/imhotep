import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

// const disabledInitialState = {
//     disabled: false
// }

// const [valueDisabled, setvalueDisabled] = useState(disabledInitialState);

const options = [
    { value: 'seloger', label: 'SeLoger' },
    { value: 'pap', label: 'PAP' },
    { value: 'bon_coin', label: 'Leboncoin' },
    { value: 'all', label: 'Tous' }
]

const ProvidersChooser = (props) => {
    console.log('ProvidersChooser props: ', props);

    const getProvidersValue = (values) => {
        //console.log('providers values: ', values);
        if (values !== null) {
            props.setProviders( values.map(value => value.value) )
        }
        else {
            props.setProviders( [] );
        };

        // if ( values.includes('all') ) {
        //     //console.log('plop');
        //     setvalueDisabled({disabled: true});
        // }
    }

    return (
        <div className="options-container">
            <Select
                isClearable
                placeholder={'Sélectionnez le(s) site souhaité(s)'}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                //disabled={valueDisabled.disabled}
                onChange={(values) => getProvidersValue(values)}
            />
        </div>
    )
}

export default ProvidersChooser;