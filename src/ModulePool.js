import React from 'react';

class ModulePool extends React.Component {
  renderModules(){ 
  	return this.props.selectedCourseTitels.map((module) => {
      return(
        <div key={module}>{module}</div>
        );
    });

  }
  render() {
    return (
      <div id="coursePool" className="float-right">
        <div className="bordertype">
          <div id="main">Plane dein 6. Semester <p></p> {this.renderModules()} </div>
         </div> 
      </div>
    )
  }
}

export default ModulePool
