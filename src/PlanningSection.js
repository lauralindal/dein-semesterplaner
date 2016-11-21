import React from 'react';

class PlanningSection extends React.Component {
  render() {
    return (
      <div id="planningSection">
        <div id="sum" className="float-left">
          <div id="sum_total">
            <h5>Alle Leistungspunkte</h5>
            Du hast bisher [xxx] Leistungspunkte gesammelt.
          </div>
          <div id="sum_current">
            <h5>Aktuelle Leistungspunkte</h5>
              Du hast in diesem Semester [xxx] Kurse mit insgesamt [xxx]Leistungspunkten belegt.
          </div>
        </div>
        <div id="coursePool" className="float-right">
            Course Pool <br />
            Plane dein 6. Semester <br />
            <div id="main"></div>
        </div>
        <p className="u-cf"></p>
      </div>
    )
  }
}

export default PlanningSection
