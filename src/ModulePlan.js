import React from 'react';
import Semester from './Semester';

class ModulePlan extends React.Component {
  render() {
    return (
      <div>
        Regelstudienplan
        {this.props.semesters.map(function(semester, index) {
          return (
            <Semester semester={index+1} modules={semester} />
          )
        })
        }
      </div>
    )
  }
}

export default ModulePlan
