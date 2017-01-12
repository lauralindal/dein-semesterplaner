import React from 'react';

class ModulePool extends React.Component {
  renderModules(){ 
  	return this.props.selectedCourseInfo.map((module) => {
      return(
        <div key={module.id}>{module.location}</div>
        );
    });

  }
  render() {
    return (
      <div id="coursePool" className="float-right">
          Course Pool <br />
          Plane dein 6. Semester <br />
          <div id="main">{this.renderModules()}</div>
      </div>
    )
  }
}

export default ModulePool
