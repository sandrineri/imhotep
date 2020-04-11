import React from 'react';
//import Creatable from 'react-select/creatable';
import CreatableSelect from 'react-select/creatable';

const SearchBar = (props) => {
    //console.log('Searchbar props: ', props);

    const getInputValue = (values) => {
        console.log(values);
        if (values !== null)
            props.setInputSearchValue(values.map((value) => value.value));
        else
            props.setInputSearchValue(["Paris"]);
    }

    return (
        <div className="options-container">
            <label className="option-label">Où cherchez-vous ?</label>
            <div className="searchbar-container">
                <CreatableSelect
                    isClearable={true}
                    isMulti
                    defaultValue={{ label: "Paris", value: "Paris" }}
                    onChange={(values) => getInputValue(values)}
                    placeholder="Touche entrée pour valider un mot clé..."
                    noOptionsMessage={() => null}
                    formatCreateLabel={(value) => `Ajouter ${value}`}
                />
            </div>
        </div>
    )
}

export default SearchBar;