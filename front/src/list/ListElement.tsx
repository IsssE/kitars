import React from 'react';
import CSS from 'csstype';

export interface IListElement {
    value: number;
    new: boolean;
}



interface IListElementProps {
    element: IListElement;
    key: number;
    deleteElement?: (element: IListElement) => void;
}

const ListElement = (props: IListElementProps) => {
    const handleClick = () => {
        if(props.deleteElement) {
            props.deleteElement(props.element)
        }
    }    

    const deleteButton = props.deleteElement ?
        <button onClick={handleClick} style={deleteButtonStyle}>X</button>
        : null;

    return <li style={props.element.new ? { color: "red" } : {}}>
        {props.element.value}
        {deleteButton}
    </li>
}

const deleteButtonStyle: CSS.Properties = {
    margin: '0px 0px 5px 15px',
    padding: '5px 5px 5px 5px',
    backgroundColor: '#e5e5e5',
    border: '1px solid black',
    textDecoration: 'none'
}

export default ListElement;