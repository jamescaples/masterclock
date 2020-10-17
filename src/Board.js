import React, {useState} from 'react';
import moment from 'moment';
import Clock from './Clock';


function Board(props) {


    const time = moment().format(); 
        

    let [count,
        setCount] = useState(0)
    function timer() {
        setTimeout(() => {
            setCount(count + 1);
            timer();
        }, 500);
    }
    timer();
    return (
        <div className="Board">

            {props.citiesObj.map((e, i) => {
                return <Clock cityObj={e} key={i} clockTime={time}/>;
            })}
            
        </div>
    )

}   

export default Board;