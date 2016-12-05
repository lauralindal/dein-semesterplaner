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
      <div className="available"></div>
      <div>Belegbarer<br/>Kurs</div>
      </div>

      <div className="float-left">
      <div className="started"></div>
      <div>Angefangener<br/>Kurs</div>
      </div>

      <div className="float-left">
      <div className="completed"></div>
      <div>Abgeschlossener<br/>Kurs</div>
      </div>
   
      <div className="float-left">
      <div className="urgent"></div>
      <div>Wiederholbarkeitsfrist<br/>läuft ab</div>
      </div>

      <div className="float-left">
      <div className="planned"></div>
      <div>Für das aktuelle Semester<br/>eingeplanter Kurs</div>
      </div>

      <div className="float-left">
      <div className="planned_urgent"></div>
      <div>Dringend abzuschliessender<br/> Kurs</div>
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
