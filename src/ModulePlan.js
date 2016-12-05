import React from 'react';
import Semester from './Semester';

class ModulePlan extends React.Component {
  render() {
    return (
      <div>
        <section id="symbology">
          Legende

<div>
  <legend>
    <div className="row">
      <div className="float-left">
      <div className="completed">aa</div>
      <div>Completed<br/>Module</div>
      </div>

      <div className="float-left">
      <div className="available">aa</div>
      <div>Available<br/>Module</div>
      </div>

      <div className="float-left">
      <div className="started">aa</div>
      <div>Started<br/>module</div>
      </div>

      <div className="float-left">
      <div className="urgent">aa</div>
      <div>Urgent<br/>module</div>
      </div>

      <div className="float-left">
      <div className="planned">aa</div>
      <div>Planned<br/>module</div>
      </div>

    </div>
  </legend>
</div>

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
