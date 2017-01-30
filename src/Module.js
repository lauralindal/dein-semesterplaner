import React from 'react';

class Module extends React.Component {
  toggleModule(e){
    this.props.toggleModule(this.props.userModule.module_id,e);
  };

  translateModuleStatus(){
    var status = this.props.userModule.status;
    
    switch (status) {
      case "urgent":
        return "dringend";
        break;
      case "started":
        return "begonnen";
        break;
      case "selected":
        return "ausgewählt";
        break;
      case "completed":
        return "abgeschlossen";
        break;
      default:
        return "belegbar";
    }
  }

  render() {
    var ModuleClasses = "button";
    var ModuleClasses_fix = "fix";

    switch (this.props.userModule.status) {
      case "urgent":
        ModuleClasses += " red grow";
        break;
      case "started":
        ModuleClasses += " yellow grow";
        break;
      case "selected":
        ModuleClasses += " green grow";
        break;
      case "completed":
        ModuleClasses += " grey default-cursor";
        break;
      default:
        ModuleClasses += " blue grow";
    }

    return (
      <div key={this.props.module.title} className="semester">
          <div className={ModuleClasses} onClick={this.toggleModule.bind(this)}>{this.props.module.title} <br/>
          <span className="moduleStatus">{this.translateModuleStatus()}</span></div>
      </div>
    )
  }
}

export default Module
