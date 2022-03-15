import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {
    const { setcategories } = props;
    //console.log(setcategories);
    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("La función trabaja correctamente");
        if (inputValue.trim().length > 2) {
            setcategories(ctgs => [ inputValue ,...ctgs]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" value={inputValue} onChange={handleInputValue} />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}