import React from 'react';

class CurrentCredits extends React.Component {

  createText(){
  	var numberOfModules= this.props.selectedCoursesCounter;
  	if (numberOfModules===1){
  		return "Modul";
  	}else{
  		return "Module";
  	}
  }

  render() {
    return (
      <div id="sum_current">
        <h5>Aktuelle Leistungspunkte</h5>
          Du hast in diesem Semester {this.props.selectedCoursesCounter} {this.createText()} mit insgesamt {this.props.currentCreditPoints} Leistungspunkten belegt.
      </div>
    )
  }
}

export default CurrentCredits
