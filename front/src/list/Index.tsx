import React, { useState } from 'react';
import TopList from './TopList';
import ListInput from './ListInput';
import { IListElement } from './ListElement';


const ListContainer = () => {
    const [resultsList, setResultsList] = useState<IListElement[]>([]);

    const handleNewResult = (newResult: number) => {
        setResultsList( results => {
            results.forEach(x => x.new = false);
            return [...results, {value: newResult, new: true}]
        })
            
    }

    return (
        <div>

            <ListInput saveNewSubmission={handleNewResult}/>
            <TopList results={resultsList} />
        </div>
    );
}

export default ListContainer;