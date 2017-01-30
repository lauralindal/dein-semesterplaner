import React from 'react';

class CurrentCredits extends React.Component {

createText(){
  var numberOfModules= this.props.selectedCoursesCounter;
  if (numberOfModules===1){
    return "Modul";
  }else{
    return "Module";
  }
 };

  render() {
    return (
      <div id="sum_current">
        <h5>Aktuelle Leistungspunkte</h5>
         <p>Du hast in diesem Semester <b>{this.props.selectedCoursesCounter}</b> {this.createText()} <br /> mit insgesamt <b>{this.props.currentCreditPoints}</b>  Leistungspunkten <br />belegt.</p>
         <p>Dein Studium wird schätzungsweise noch <br /><b>{this.props.remainingSemesters}</b> Semester andauern.</p>
      </div>
    )
  }
}

export default CurrentCredits
