import React from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div>
      <div className="cover">
        <div className="popup">
          <p>
            <strong>ACHTUNG!</strong> <br />
            Für {this.props.returnUrgentModuleTitles + " "}
            läuft die Wiederholbarkeitsfrist ab. <br />
            Du musst dies in diesem Semester abschließen.
          </p>
          <button className="redHover marginButton" onClick={this.props.dismissPopup}> Ignorieren </button>
          <button className="greenHover marginButton" onClick={this.props.selectUrgentModules}> Alle auswählen </button>
        </div>
        </div>
      </div>
    )
  }
}

export default Popup
