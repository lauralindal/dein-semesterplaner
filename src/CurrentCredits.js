import React from 'react';

class CurrentCredits extends React.Component {
  render() {
    return (
      <div id="sum_current">
        <h5>Aktuelle Leistungspunkte</h5>
          Du hast in diesem Semester {this.props.selectedCoursesCounter} Module mit insgesamt {this.props.currentCreditPoints} Leistungspunkten belegt.
      </div>
    )
  }
}

export default CurrentCredits
