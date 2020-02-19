import React, { useState } from 'react';
import TopList from './TopList';
import ListInput from './ListInput';
import { IListElement } from './ListElement';


const ListContainer = () => {
    const [resultsList, setResultsList] =
        useState<IListElement[]>([{ new: false, value: 2 }]);

    const handleNewResult = (newResult: number) => {
        setResultsList(results => {
            results.forEach(x => x.new = false);
            return [...results, { value: newResult, new: true }]
        })

    }
    const handleDeleteElement = (element: IListElement) => {
        const newList = resultsList.filter(x => x !== element);
        setResultsList(newList);
    }

    return (
        <div>

            <ListInput saveNewSubmission={handleNewResult} />
            <TopList results={resultsList} deleteElement={handleDeleteElement} />
        </div>
    );
}

export default ListContainer;