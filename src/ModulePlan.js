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
              <div><h6>Kurs belegt</h6></div>
            </div>
            <div className="flex-item item2">
              <div className="started"></div>
              <div><h6>Kurs begonnen</h6></div>
            </div>
            <div className="flex-item item3">
              <div className="completed"></div>
              <div><h6>Kurs beendet</h6></div>
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
              <div><h6>Dringlichkeitskurs geplant</h6></div>
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
