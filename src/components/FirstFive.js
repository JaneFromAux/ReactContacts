import FirstFiveItems from './FirstFiveItems';
import data from '../data';
import { useState } from 'react';


const FirstFive = () => {
    const [arr, setArr] = useState([data[0], data[1], data[2], data[3], data[4]]);

    let addRandomCont = () => {
        let randi = Math.floor(Math.random() * data.length);
        setArr([...arr, data[randi]]);
    }
    let sortByName = () => {
        let sortName = [...arr].sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } return 0;
        })
        setArr(sortName);
    }
    let sortByPop = () => {
        let sortPop = [...arr].sort(function (a, b) {
            return b.popularity - a.popularity;
        })
        setArr(sortPop);
    }

    return (
        <div>
            <div>
                <button onClick={addRandomCont}>ADD RANDOM CONTACT</button>
                <button onClick={sortByName}>SORT BY NAME</button>
                <button onClick={sortByPop}>SORT BY POPULARITY</button>
            </div>
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