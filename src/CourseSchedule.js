import React from 'react';
import TimeSlots from './TimeSlots';


class CourseSchedule extends React.Component {

render() {
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
        <TimeSlots combinedTitleAndData={this.props.combinedTitleAndData}/>
    </table>
    </section>
    )
  }
}

export default CourseSchedule