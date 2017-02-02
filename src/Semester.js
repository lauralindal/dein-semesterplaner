import React from 'react';
import Module from './Module';

class Semester extends React.Component {
  render() {
    var _this=this;
    return (
      <div key={"semester_" + this.props.semester}>
        <legend>{this.props.semester}. Semester</legend>
        {this.props.modules.map((module, i) =>
          (<Module module={module.module} userModule={module.userModule} key={this.props.semester + "_" + i} toggleModule={_this.props.toggleModule} />)
        )
        }
      </div>
    )
  }
}

export default Semester
