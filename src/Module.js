import React from 'react';

class Module extends React.Component {
  toggleModule(e){
    this.props.toggleModule(this.props.userModule.module_id,e);
  };

  render() {
    var ModuleClasses = "button hover";
    var ModuleClasses_fix = "fix";

    switch (this.props.userModule.status) {
      case "urgent":
        ModuleClasses += " red";
        break;
      case "started":
        ModuleClasses += " yellow";
        break;
      case "selected":
        ModuleClasses += " green";
        break;
      case "completed":
        ModuleClasses += " grey";
        break;
      default:
        ModuleClasses += " blue";
    }

    return (
      <div key={this.props.module.title} className="semester">
          <p className={ModuleClasses} onClick={this.toggleModule.bind(this)}>{this.props.module.title} {this.props.userModule.status}</p>
      </div>
    )
  }
}

export default Module
