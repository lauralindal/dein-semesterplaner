import React from 'react';

class TotalCredits extends React.Component {
 	
  render() {
    return (
      <div id="sum_total">
      <h5>Alle Leistungspunkte</h5>
      <p>Du hast bisher <br /><b>{this.props.totalCreditPoints}</b> von <b>180</b> <br />Leistungspunkten gesammelt.</p>
      </div>
    )
  }
}

export default TotalCredits
