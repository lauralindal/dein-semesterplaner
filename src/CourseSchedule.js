import React from 'react';
import Weekday from './Weekday';

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
    <tbody>
      <tr>
       <td>8.00 - 9.30</td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
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
     </tbody>
   </table>
   <br />
   
<Weekday />

  
</section>


      )
    
  }
}

export default CourseSchedule