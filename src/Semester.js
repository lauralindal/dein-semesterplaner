import React from 'react';
import Module from './Module';

class Semester extends React.Component {

  render() {
    return (
      <div key={this.props.semester}>
        <legend>{this.props.semester}. Semester</legend>
        {this.props.modules.map((e, i) =>
          (<Module module={e} key={i} />)
        )
        }
      </div>
    )
  }
}

export default Semester
