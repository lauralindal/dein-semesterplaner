import React from 'react';
import Module from './Module';

class Semester extends React.Component {

  render() {
    return (
      <div id="sem_01">
        <legend>1. Semester</legend>
        {this.props.semester.map((e, i) =>
          (<Module module={e} key={i} />)
        )
        }
      </div>
    )
  }
}

export default Semester
