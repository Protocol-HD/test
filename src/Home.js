import React, { useContext } from 'react';
import { contexts } from './Contexts';

function Home() {
    const { num, setNum } = useContext(contexts)

    return (
        <div>
            {num}
            <br/>
            <button onClick={() => setNum(num + 1)}>click!!</button>
        </div>
    );
}

export default Home;
