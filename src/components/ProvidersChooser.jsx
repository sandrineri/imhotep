import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
    { value: 'seloger', label: 'SeLoger' },
    { value: 'pap', label: 'PAP' },
    { value: 'boncoin', label: 'Leboncoin' }
]

const ProvidersChooser = (props) => {
    console.log('ProvidersChooser props: ', props);

    const getProvidersValue = (values) => {
        //console.log('providers values: ', values);
        if (values !== null) 
            props.setAdProviders( values.map(value => value.value) );
        
        else props.setAdProviders( [] );
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
                noOptionsMessage={() => null}
                onChange={(values) => getProvidersValue(values)}
            />
        </div>
    )
}

export default ProvidersChooser;