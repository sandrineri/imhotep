import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
    { value: '75001', label: '1è arrondissement' },
    { value: '75002', label: '2è arrondissement' },
    { value: '75003', label: '3è arrondissement' },
    { value: '75004', label: '4è arrondissement' },
    { value: '75005', label: '5è arrondissement' },
    { value: '75006', label: '6è arrondissement' },
    { value: '75007', label: '7è arrondissement' },
    { value: '75008', label: '8è arrondissement' },
    { value: '75009', label: '9è arrondissement' },
    { value: '75010', label: '10è arrondissement' },
    { value: '75011', label: '11è arrondissement' },
    { value: '75012', label: '12è arrondissement' },
    { value: '75013', label: '13è arrondissement' },
    { value: '75014', label: '14è arrondissement' },
    { value: '75015', label: '15è arrondissement' },
    { value: '75016', label: '16è arrondissement' },
    { value: '75017', label: '17è arrondissement' },
    { value: '75018', label: '18è arrondissement' },
    { value: '75019', label: '19è arrondissement' },
    { value: '75020', label: '20è arrondissement' }
];


const AreaChooser = (props) => {
    const getSearchAreaValue = (values) => {
        if (values !== null) props.setSearchArea(values.map(value => value.value));
        else props.setSearchArea([]);
    };

    return (
        <div className="option-container">
            <Select
                className="select"
                isClearable
                placeholder="Sélectionnez le(s) arrondissement(s) souhaité(s)"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                noOptionsMessage={() => null}
                onChange={(values) => getSearchAreaValue(values)}
            />
        </div>
    );
};

export default AreaChooser;
