import React from 'react';

class ModulePool extends React.Component {
  toggleModule(module, e){
    this.props.toggleModule(module.module_id,e);
  };

  renderModules(){
    var _this=this;
  	return this.props.retrieveSelectedModules.map((module) => {
      return(
        <div>
        <div onClick={_this.toggleModule.bind(_this, module)} className="button fix" key={module.title}>{module.title}</div>
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
