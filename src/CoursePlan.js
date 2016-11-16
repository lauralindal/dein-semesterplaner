import React from 'react';
import Semester from './Semester';
import courseplan from './courseplan.json';

class CoursePlan extends React.Component {

  render() {
    var modules = courseplan.degree_course.modules;
    var maxSemester = 6;
    var semesters = [1,2,3,4,5,6].map(function (semester) {
      return modules.filter(function(module) {
        return module.recommended_semester === semester;
      });
    })

    return (
      <div>
        Regelstudienplan
        {semesters.map(function(semester, index) {
          return (
            <Semester semester={index+1} modules={semester} />
          )
        })
        }
      </div>
    )
  }
}

export default CoursePlan
