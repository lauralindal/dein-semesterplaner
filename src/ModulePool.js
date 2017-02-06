import React from 'react';

class ModulePool extends React.Component {

  toggleModule(module, e) {
    this.props.toggleModule(module.module_id, e);
  };

  renderModules() {
    var _this = this;
    if (this.props.retrieveSelectedModules.length === 0){
      return (
        <div>
        <h4>Plane hier dein kommendes Semester</h4>
        </div>
      );
    }
    else {
      return this.props.retrieveSelectedModules.map((module) => {
        return (
        <div key={"pool_" + module.title}>
        <div
          onClick={_this.toggleModule.bind(_this, module)}
          className="button fix"
        >
          {module.title}
        </div>
        <br />
        </div>
        );
      });
    }
  };

  render() {
    return (
      <div id="coursePool" className="float-right">
        <div className="bordertype">
          <div id="main" className="infotext"> {this.renderModules()}</div>
        </div>
      </div>
    )
  }
}

export default ModulePool
