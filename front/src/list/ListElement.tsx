import React from 'react';

export interface IListElement {
    value: number;
    new: boolean;
}

interface IListElementProps extends IListElement {
    key: number;
}

const ListElement = (props: IListElementProps) => {
    return (<li style={props.new ? {color: "red"} : {}}> {props.value} </li>);
}

export default ListElement;