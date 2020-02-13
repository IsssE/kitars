import React, { useState } from 'react';
import TopList from './TopList';
import ListInput from './ListInput';


const ListContainer = () => {
    const [resultsList, setResultsList] = useState<number[]>([]);

    const handleNewResult = (newResult: number) => {
        setResultsList( results => [...results, newResult]);
    }

    return (
        <div>

            <ListInput saveNewSubmission={handleNewResult}/>
            <TopList results={resultsList} />
        </div>
    );
}

export default ListContainer;