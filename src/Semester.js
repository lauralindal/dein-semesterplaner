import React from 'react';
import Module from './Module';

class Semester extends React.Component {

  render() {
    return (
      <div id="sem_01">
        <legend>1. Semester</legend>
        <Module />
        {console.log(this.props.semester)}
        <p id="sem01_mod02" className="button">RABS</p>
        <p id="sem01_mod03" className="button">Konzepte d. Informatik</p>
        <p id="sem01_mod04" className="button">BWL 1 / Grundlagen</p>
        <p id="sem01_mod05" className="button">Mathe</p>
        <p id="sem01_mod06" className="button">Fremdsprache 1</p>
      </div>
    )
  }
}

export default Semester
