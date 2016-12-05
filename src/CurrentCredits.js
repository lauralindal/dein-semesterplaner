import React from 'react';

class CurrentCredits extends React.Component {
  render() {
    return (
      <div id="sum_current">
        <h5>Aktuelle Leistungspunkte</h5>
          Du hast in diesem Semester  Kurse mit insgesamt {this.props.currentCreditPoints} Leistungspunkten belegt.
      </div>
    )
  }
}

export default CurrentCredits
