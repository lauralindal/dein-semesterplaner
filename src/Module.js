import React from 'react';

class Module extends React.Component {
  render() {
    return (
      <div key={this.props.module.title} className="semester">
          <p id="sem01_mod01" className="button hover" >{this.props.module.title}</p>
      </div>
    )
  }
}

export default Module
