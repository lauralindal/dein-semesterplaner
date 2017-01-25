import React from 'react';
import Semester from './Semester';

class ModulePlan extends React.Component {
  render() {
    var _this=this;
    return (
      <div>
      <section id="symbology">
        <div>

        <legend>
          <div className="flex-container">
            <div className="flex-item item1">
              <div className="available"></div>
              <div><h6>Kurs belegbar</h6></div>
            </div>
            <div className="flex-item item2">
              <div className="started"></div>
              <div><h6>Kurs begonnen</h6></div>
            </div>
            <div className="flex-item item3">
              <div className="completed"></div>
              <div><h6>Kurs abgeschlossen</h6></div>
            </div>
            <div className="flex-item item4">
              <div className="urgent"></div>
              <div><h6>Kurs mit Dringlichkeit</h6></div>
            </div>
            <div className="flex-item item5">
              <div className="selected"></div>
              <div><h6>Kurs geplant</h6></div>
            </div>
            <div className="flex-item item6">
              <div className="selected_urgent"></div>
              <div><h6>Dringlicher Kurs geplant</h6></div>
            </div>
          </div>
        </legend>
      
      </div>

    </section>
      
    <div>
      <h5>Regelstudienplan</h5>
      {this.props.semesters.map(function(semester, index) {
        return (
          <Semester semester={index+1} modules={semester} toggleModule={_this.props.toggleModule} />
          )
      })
    }
    </div>
    </div>
    )
  }
}

export default ModulePlan
