import React from 'react';
import TimeSlot from './TimeSlot';

class Weekday extends React.Component {

getTimeSlots() {
    const sessions= [
    { id:1, starttime:'8.00'},
    { id:2, starttime:'9.45'},
    { id:3, starttime:'12.15'},
    { id:4, starttime:'14.00'},
    { id:5, starttime:'15.45'}
    ];
    return sessions.map((slot) => {
      return(
        <TimeSlot  time={slot.starttime} key={slot.id} />
        );
    });
  }


  render() {

  	var timeslots= this.getTimeSlots();
    return (
    	<tablebody>
   		<th> 
   		{this.props.name}  
   		</th>
   		<TimeSlot time={timeslots}/>
   		</tablebody>
    )
  }
}

export default Weekday