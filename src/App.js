import React, {useState} from 'react';
import moment from 'moment';
import "moment-timezone";
import './App.css';
import Board from './Board';

function App() {
    return (
        <div className="App">
            <Board
                citiesObj={[
                {
                    city: 'Stockholm',
                    region: 'Europe'
                }, {
                    city: 'London',
                    region: 'Europe'
                }, {
                    city: 'Tehran',
                    region: 'Asia'
                }, {
                    city: 'Chicago',
                    region: 'America'
                }, {
                    city: 'Omsk',
                    region: 'Asia'
                }, {
                    city: 'Adelaide',
                    region: 'Australia'
                }
            ]}/>
        </div>
    );
}

export default App;
