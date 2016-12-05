import React from 'react';
import Module from './Module';

class Semester extends React.Component {
  render() {
    return (
      <div key={this.props.semester}>
        <legend>{this.props.semester}. Semester</legend>
        {this.props.modules.map((module, i) =>
          (<Module module={module.module} userModule={module.userModule} key={i} />)
        )
        }
      </div>
    )
  }
}

export default Semester
