import React, { useEffect, useState } from 'react';
import CSS from 'csstype';

interface listInputProps {
    saveNewSubmission?: (changesAmount: number) => void;
}

const ListInput = (props: listInputProps) => {

    const [number, setNumber] = useState('');

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNumber(event.target.value);
    }

    const handleSubmit = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        event.preventDefault();
        if (props.saveNewSubmission) {
            const parsedNumber = Number.parseInt(number); 
            if(parsedNumber) {
                props.saveNewSubmission(parsedNumber);
            } else {
                // if we want some fancy error handling for non number submit
                // atm the input highlights red if non number
            }

        }
        setNumber('');
    }
    return (
        <div>
            <label> Amount of single changes! </label> <br />
            <input type={"number"} value={number} onChange={handleNumberChange}></input>
            <input type={"button"} style={addButton} onClick={handleSubmit} value={"Add"}></input>
        </div>
    );

}

const addButton: CSS.Properties = {
    marginLeft: "5px",
    border: "none",
    
}

export default ListInput;