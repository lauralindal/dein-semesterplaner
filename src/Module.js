import React from 'react';

class Module extends React.Component {
  render() {
    return (
      <div key={this.props.module.title} className="semester">
          <p className="button hover" >{this.props.module.title} {this.props.userModule.status}</p>
      </div>
    )
  }
}

export default Module
