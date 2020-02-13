import React from 'react'
import ListElement, { IListElement } from './ListElement';

interface ITopListProps {
    results?: IListElement[];
}

const sortter = (a: IListElement, b: IListElement) => {
    return b.value - a.value;
}

const TopList = (props: ITopListProps) => {
    return (
        <ul style= {{listStyleType: "none"}}>
            {props.results?.sort(sortter).map((x, index)=> {
                return <ListElement key={index} new={x.new} value={x.value}/>
            })}
        </ul>
    )
}

export default TopList;