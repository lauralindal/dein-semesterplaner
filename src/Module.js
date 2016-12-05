import React from 'react';

class Module extends React.Component {
  render() {
    var ModuleClasses = "button hover";

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
          <p className={ModuleClasses}>{this.props.module.title} {this.props.userModule.status}</p>
      </div>
    )
  }
}

export default Module
