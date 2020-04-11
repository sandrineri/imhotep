import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
    { value: 'seloger', label: 'SeLoger' },
    { value: 'pap', label: 'PAP' },
    { value: 'boncoin', label: 'Leboncoin' }
];

const ProvidersChooser = (props) => {
    const getProvidersValue = (values) => {
        if (values !== null) props.setAdProviders(values.map(value => value.value));
    };

    return (
        <div className="option-container">
            <div className="option-sub">
                <p className="option-label">Chercher sur les sites de location de votre choix</p>
            </div>
            <Select
                className="select"
                isClearable
                placeholder="Sélectionnez le(s) site(s) souhaité(s)"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                noOptionsMessage={() => null}
                onChange={(values) => getProvidersValue(values)}
            />
        </div>
    );
};

export default ProvidersChooser;
