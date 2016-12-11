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
          <div className="flex-container">
            <div class="flex-item item1">
              <div className="available"></div>
              <div><h6>Belegbarer<br/>Kurs</h6></div>
            </div>
            <div className="flex-item item2">
              <div className="started"></div>
              <div><h6>Angefangener<br/>Kurs</h6></div>
            </div>
            <div className="flex-item item3">
              <div className="completed"></div>
              <div><h6>Abgeschlossener<br/>Kurs</h6></div>
            </div>
            <div className="flex-item item4">
              <div className="urgent"></div>
              <div><h6>Wiederholbarkeitsfrist<br/>läuft ab</h6></div>
            </div>
            <div className="flex-item item5">
              <div className="selected"></div>
              <div><h6>Für das aktuelle Semester<br/>eingeplanter Kurs</h6></div>
            </div>
            <div className="flex-item item6">
              <div className="selected_urgent"></div>
              <div><h6>Dringend abzuschliessender<br/> Kurs</h6></div>
            </div>

 
{/*
          <div className="float-left">
          
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
          <div className="selected"></div>
          <div>Für das aktuelle Semester<br/>eingeplanter Kurs</div>
          </div>

          <div className="float-left">
          <div className="selected_urgent"></div>
          <div>Dringend abzuschliessender<br/> Kurs</div>
          </div>
*/}
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
