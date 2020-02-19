import React from 'react'
import ListElement, { IListElement } from './ListElement';
import CSS from 'csstype';

interface ITopListProps {
    results?: IListElement[];
    deleteElement?: (element: IListElement) => void;
}

const sortter = (a: IListElement, b: IListElement) => {
    return b.value - a.value;
}

const TopList = (props: ITopListProps) => {

    return (
        <ul style={list}>
            {props.results?.sort(sortter).map((x, index) => {
                return <ListElement
                    key={index}
                    element={x}
                    deleteElement={props.deleteElement}
                />
            })}
        </ul>
    )
}
const list: CSS.Properties = {
    listStyleType: "none"
}

export default TopList;