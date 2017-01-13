import React from 'react';
import TimeSlots from './TimeSlots';


class CourseSchedule extends React.Component {

  
 
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
        <TimeSlots  time={slot.starttime} name={slot.name} key={slot.id} />
        );
    });
  }

  render() {
  var timeslots= this.getTimeSlots();
    return (
    <section id="schedule">
      <h5>Kalender/Weekly Planner</h5>
    <table>
      <tr>
        <th>Zeiten</th>
        <th>Montag</th>
        <th>Dienstag</th>
        <th>Mittwoch</th>
        <th>Donnerstag</th>
        <th>Freitag</th>
        <th>Samstag</th>
      </tr>
        <TimeSlots />
      <tr>
      <td>9.45 - 11.15</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>12.15 - 13.45</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>14.00 - 15.30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>15.45 - 17.15</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    </section>
    )
  }
}

export default CourseSchedule