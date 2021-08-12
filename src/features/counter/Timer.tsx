import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
///

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    addTime,
    selectTimer
} from './timerSlice';

//   const [newItemName, setNewItemName] = useState('');

///

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <span>
                {days}:{hours}:{minutes}:{seconds}
            </span>
        );
    }
};



export default () => {
    const timerElement = useRef<Countdown>(null);
    const onAddTime = () => {
        window['timerElement']= timerElement;
        const amount = 10000;
        dispatch(addTime(amount))
        setTimeout(() => {
            if(timerElement?.current?.isStopped()){
                timerElement?.current?.start()
            }
        }, 0); 
    }


    const timer = useAppSelector(selectTimer);
    const dispatch = useAppDispatch();



    return (<>
        <button onClick={onAddTime}>+ Add Time</button>
        <Countdown ref={timerElement} date={new Date(timer.destinationTime)} renderer={renderer} />
    </>
    )
}

