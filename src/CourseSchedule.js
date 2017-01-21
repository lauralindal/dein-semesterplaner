import React from 'react';
import TimeSlots from './TimeSlots';


class CourseSchedule extends React.Component {

  
createTimeSlots(){
  const starttimes= ["8:00","9:45","12:15","14:00","15:45"];
  const days= ["Montag","Dienstag", "Mittwoch","Donnerstag","Freitag","Samstag" ];
  var counter= 0;
  var slots= [];
    for (var i = 0; i < starttimes.length; i++) {
      for (var j = 0; j < days.length; j++) {
        slots.push({id:counter, day: days[j], time:starttimes[i] , info:null})
        counter++;
      }
    }
  return slots;
};

fillTimeSlots(){
  var courseInfo= this.props.combinedTitleAndData;
  var timeslots= this.createTimeSlots();
  if (typeof courseInfo != 'undefined'){
    for (var i = 0; i < timeslots.length; i++) {
      for (var j = 0; j < courseInfo.length; j++) {
        if (timeslots[i].day === courseInfo[j].day && timeslots[i].time === courseInfo[j].startTime)
        {
          timeslots[i].info=courseInfo[j];
        }
      }
    }
  }
  return timeslots;
};

 
/*getTimeSlots() {
  const sessions= [
  { id:1, starttime:'8.00', day:'Monday', name:'slot 1'},
  { id:2, starttime:'9.45', name:'slot 2'},
  { id:3, starttime:'12.15', name:'slot 3'},
  { id:4, starttime:'14.00', name:'slot 4'},
  { id:5, starttime:'15.45', name:'slot 5'}
  ];
  return sessions.map((slot) => {
    return(
      <td> time={slot.starttime} name={slot.name} key={slot.id} </td>
      );
  });
}

renderTimeSlots() {
  return timeslots.map(slot)=> {
    return(
      <td> title={slot.info.title} session={slot.info.course-format} instructor={slot.info.course-format} key={slot.id} </td>
      );
  });
};
*/


render() {
    var filledTimeSlots= this.fillTimeSlots();

    return (
    <section id="schedule">
      <h5>Kalender/Weekly Planner</h5>
    <table>
    <thead>
      <tr>
        <th>Zeiten</th>
        <th>Montag</th>
        <th>Dienstag</th>
        <th>Mittwoch</th>
        <th>Donnerstag</th>
        <th>Freitag</th>
        <th>Samstag</th>
      </tr>
    </thead>
        <TimeSlots />
    </table>
    </section>
    )
  }
}

export default CourseSchedule