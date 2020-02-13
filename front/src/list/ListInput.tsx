import React, { useEffect, useState } from 'react';

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
            props.saveNewSubmission(Number.parseInt(number));
        }
        setNumber('');
    }
    return (
        <div>
            <label> Amount of single changes! </label> <br />
            <input type={"number"} value={number} onChange={handleNumberChange}></input>
            <input type={"button"} onClick={handleSubmit} value={"Add"}></input>
        </div>
    );

}

export default ListInput;