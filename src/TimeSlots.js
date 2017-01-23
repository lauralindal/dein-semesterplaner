import React from 'react';

class TimeSlots extends React.Component {

  renderTimes(){
    const starttimes=["8:00","9:45","12:15","14:00","15:45"];
    var _this= this;
    return starttimes.map(function(time){
      return (<tr key={time}>{_this.renderSlots(time)}</tr>);
    });
  };

  renderSlots(time){
    const days = [null,"Montag","Dienstag", "Mittwoch","Donnerstag","Freitag","Samstag"];
    var _this= this;
    return days.map(function(day){
      return (<td key={time+day}>{_this.renderCell(time, day)}</td>);
    });
  };

  renderCell(time, day) {
    if (day===null){
      return (<div>{time}</div>);
    }
    else{
      var courseInfo= this.props.combinedTitleAndData;
      var selectedCourses= [];
      for (var j = 0; j < courseInfo.length; j++) {
        if (day === courseInfo[j].day && time === courseInfo[j].startTime)
        {
           selectedCourses.push(courseInfo[j]);
        }
      }
      return this.renderMultipleCourses(selectedCourses);
    }
  };

  renderMultipleCourses(selectedCourses){
    var _this= this;
    return selectedCourses.map(function(course){
      return (<div key={course.title+course.startTime+course.day}>
          <b>{course.title}</b><br/> {(course["course-format"])}<br/>{course.lecturer}</div>);
    });
  };

  render() {
    return (
     <tbody>
     {this.renderTimes()}
     </tbody>
    );
  }
}

export default TimeSlots
