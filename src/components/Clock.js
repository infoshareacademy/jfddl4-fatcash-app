import React from 'react';
import Clock from 'react-live-clock';


export default class MyClock extends React.Component {
    render() {
        return (<div>

            <center><Clock className="clockclass" format={'HH:mm:ss'} ticking={true} timezone={'US/Atlantic'}/></center>
            <center><Clock className="dateclass" format={'YYYY/MM/DD'} ticking={true} timezone={'US/Atlantic'}/></center>
        </div>)
    }
}