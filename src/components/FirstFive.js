import FirstFiveItems from './FirstFiveItems';
import data from '../data';
import { useState } from 'react';


const FirstFive = () => {
    const [arr, setArr] = useState([data[0], data[1], data[2], data[3], data[4]]);

    // arr.push(data[0], data[1], data[2], data[3], data[4]);

    console.log(arr);

    let addRandomCont = () => {
        let randi = Math.floor(Math.random() * data.length);

        // arr += arr.push(data[randi]);
        setArr([...arr, data[randi]]);
    }

    return (
        <div>
            <button onClick={addRandomCont}>ADD RANDOM CONTACT</button>
            {
                arr.map((ele, i) =>
                    <FirstFiveItems
                        key={i}
                        pictureUrl={ele.pictureUrl}
                        name={ele.name}
                        popularity={ele.popularity.toFixed(2)}
                    />
                )
            }
        </div>
    );
}

export default FirstFive;