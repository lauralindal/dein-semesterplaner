import React from 'react';

class ModulePool extends React.Component {
  renderModules(){ 
  	return this.props.selectedModuleTitels.map((module) => {
      return(
        <div>
        <div className="button fix" key={module}>{module}</div>
        <br />
        </div>
        );
    });

  }
  render() {
    return (
      <div id="coursePool" className="float-right">
        <div className="bordertype">
          <div id="main"> {this.renderModules()}</div>

         </div> 
      </div>
    )
  }
}

export default ModulePool

