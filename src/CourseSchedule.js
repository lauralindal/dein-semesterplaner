import React from 'react';
import Weekday from './Weekday';


class CourseSchedule extends React.Component {

  getWeekdays() {
    const weeklist = [
    { id:0, name:'Zeiten'},
    { id:1, name:'Montag'},
    { id:2, name:'Dienstag'},
    { id:3, name:'Mittwoch'},
    { id:4, name:'Donnerstag'},
    { id:5, name:'Freitag'}
    ];
    return weeklist.map((weekday) => {
      return(
        <Weekday  name={weekday.name} key={weekday.id} />
        );
    });
  }
  

  render() {
   
  var weekdays= this.getWeekdays();
    return (
    <div>
    <section id="schedule">
      <h5>Kalender/Weekly Planner</h5>
      <table>
        <Weekday name={weekdays}/>
      </table>
    </section>
    </div>
    )
  }
}

export default CourseSchedule