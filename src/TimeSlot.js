import React from 'react';

class TimeSlot extends React.Component {
  render() {
    return (
      <tr> 
      {this.props.time}
      </tr>
    )
  }
}

export default TimeSlot