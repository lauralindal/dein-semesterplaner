import React from 'react';

class TotalCredits extends React.Component {
 	
  render() {
    return (
      <div id="sum_total">
      <h5>Alle Leistungspunkte</h5>
      <p>Du hast bisher {this.props.totalCreditPoints} von 180 Leistungspunkten gesammelt.</p>
      </div>
    )
  }
}

export default TotalCredits
