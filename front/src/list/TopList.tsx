import React from 'react'

interface ITopListProps {
    results?: number[];
}

const sortter = (a: number, b: number) => {
    return b - a;
}

const TopList = (props: ITopListProps) => {
    return (
        <ul style= {{listStyleType: "none"}}>
            {props.results?.sort(sortter).map((x, index)=> {
                return <li key={index}>{x}</li>
            })}
        </ul>
    )
}

export default TopList;