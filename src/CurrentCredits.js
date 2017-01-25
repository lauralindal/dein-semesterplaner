import React from 'react';

class CurrentCredits extends React.Component {


  render() {
    return (
      <div id="sum_current">
      <h5>Aktuelle Leistungspunkte</h5>
      Du hast in diesem Semester {this.props.selectedCoursesCounter} Module mit insgesamt {this.props.currentCreditPoints} Leistungspunkten belegt.
      <h5>Studiendauer</h5>
      Basierend auf der Annahme, dass du durchschnittlich 30 Leistungspunkte pro Semester erwirbst, wirst du nach dem kommenden Semester noch {this.props.remainingSemesters} Semester studieren.
      </div>
    )
  }
}

export default CurrentCredits
