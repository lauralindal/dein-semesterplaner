import React from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <p> Du hast dringende Kurse, möchtest du diese auswählen? </p>
        <button onClick={this.props.selectUrgentModules}> Alle auswählen </button>
        <button onClick={this.props.dismissPopup}> Dismiss </button>
      </div>
    )
  }
}

export default Popup
