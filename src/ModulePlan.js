import React from 'react';
import Semester from './Semester';

class ModulePlan extends React.Component {
  render() {
    return (
      <div>
        <section id="symbology">
          Legende
        </section>
        <div>
          Regelstudienplan
          {this.props.semesters.map(function(semester, index) {
            return (
              <Semester semester={index+1} modules={semester} />
            )
          })
          }
        </div>
      </div>
    )
  }
}

export default ModulePlan
