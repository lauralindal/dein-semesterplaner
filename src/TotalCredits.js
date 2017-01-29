import React from 'react';

class TotalCredits extends React.Component {
 	
  render() {
    return (
      <div id="sum_total">
      <h5>Alle Leistungspunkte</h5>
      Du hast bisher {this.props.totalCreditPoints} Leistungspunkte gesammelt.
      </div>
    )
  }
}

export default TotalCredits
