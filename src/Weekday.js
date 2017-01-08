import React from 'react';
import TimeSlot from './TimeSlot';


class Weekday extends React.Component {

getTimeSlots() {
    const sessions= [
    { id:1, starttime:'8.00', name:'slot 1'},
    { id:2, starttime:'9.45', name:'slot 2'},
    { id:3, starttime:'12.15', name:'slot 3'},
    { id:4, starttime:'14.00', name:'slot 4'},
    { id:5, starttime:'15.45', name:'slot 5'}
    ];
    return sessions.map((slot) => {
      return(
        <TimeSlot  time={slot.starttime} name={slot.name} key={slot.id} />
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