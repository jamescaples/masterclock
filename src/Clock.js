import React from 'react';
import "moment-timezone";
import moment from 'moment';


function Clock(props) {
    const cityRegion = props.cityObj.region + '/' + props.cityObj.city;
    return (
        <div
            className="clock-flex"
            style={{
            backgroundImage: `url('https://source.unsplash.com/random/500x500?${props.cityObj.city}'`
        }}>
            <h1 className="city">
                {props.cityObj.city}
            </h1>
            <h3 className="time">
                {moment(props.clockTime).tz(cityRegion).format('LTS')}
                {/* {new Date().toLocaleTimeString()} */}
            </h3>
        </div>
    );
}

export default Clock;