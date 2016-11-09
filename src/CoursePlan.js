import React from 'react';
import Semester from './Semester';

class CoursePlan extends React.Component {
  constructor() {
    super();
    this.state = {
      semester: []
    };
  }

  // componentWillMount() {
  //   this.ajaxCall();
  // }

  ajaxCall() {
    $.ajax({
      url: `courseplan.json`, //what is the correct url?
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        if (data !== undefined && data !== null) {
          this.setState({ semester: data });
        }
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        Regelstudienplan
        <Semester />
        <div id="sem_02">
          <legend>2. Semester</legend>
          <p id="sem02_mod01" className="button">Programmierung 2</p>
          <p id="sem02_mod02" className="button">Rechnernetze</p>
          <p id="sem02_mod03" className="button">Softwaretechnik</p>
          <p id="sem02_mod04" className="button">BWL 2 / Rechnungswesen</p>
          <p id="sem02_mod05" className="button">Betr. Anwendungen</p>
          <p id="sem02_mod06" className="button">Fremdsprache 2</p>
        </div>
        <div id="sem_03">
          <legend>3. Semester</legend>
          <p id="sem03_mod01" className="button">Webtechnologien</p>
          <p id="sem03_mod02" className="button">Datenschutz / DS</p>
          <p id="sem03_mod03" className="button">Datenbanksysteme</p>
          <p id="sem03_mod04" className="button">Projekte / Wirtschaft</p>
          <p id="sem03_mod05" className="button">Teamarbeit</p>
        </div>
        <div id="sem_04">
          <legend>4. Semester</legend>
          <p id="sem04_mod01" className="button">Praxisphase</p>
          <p id="sem04_mod02" className="button">Besondere Kapitel IT</p>
        </div>
        <div id="sem_05">
          <legend>5. Semester</legend>
          <p id="sem05_mod01" className="button">Modellierung</p>
          <p id="sem05_mod02" className="button">Verteilte Systeme</p>
          <p id="sem05_mod03" className="button">Praxis / Forschung</p>
          <p id="sem05_mod04" className="button">BWL 3</p>
          <p id="sem05_mod05" className="button">Besondere Kapitel WI</p>
          <p id="sem05_mod06" className="button">AWE Modul 1 + 2</p>
        </div>
        <div id="sem_06">
          <legend>6. Semester</legend>
          <p id="sem06_mod01" className="button">Aktuelle Trends IT</p>
          <p id="sem06_mod02" className="button">Usability</p>
          <p id="sem06_mod03" className="button">Bachelorarbeit</p>
          <p id="sem06_mod04" className="button">Bachelorseminar / Kolloquium</p>
        </div>
      </div>
    )
  }
}

export default CoursePlan
