import React from 'react';
import CreatableSelect from 'react-select/creatable';

const SearchBar = (props) => {
    const getInputValue = (values) => {
        if (values !== null) props.setInputSearchValue(values.map((value) => value.value));
        else props.setInputSearchValue(['Paris']);
    };

    return (
        <div className="option-container">
            <p className="option-label">Où cherchez-vous ?</p>
            <div className="searchbar-container">
                <CreatableSelect
                    className="select"
                    isClearable
                    isMulti
                    defaultValue={{ label: 'Paris', value: 'Paris' }}
                    onChange={(values) => getInputValue(values)}
                    placeholder="Touche entrée pour valider un mot clé..."
                    noOptionsMessage={() => null}
                    formatCreateLabel={(value) => `Ajouter ${value}`}
                />
            </div>
        </div>
    );
};

export default SearchBar;
