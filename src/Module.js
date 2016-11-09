import React from 'react';
import $ from 'jquery';

class Module extends React.Component {

  changeStatus() {
    $('#sem01_mod01').mouseOver(function() {
      $(this).css('background-color', 'red');
    });
  }

  render() {
    return (
      <div>
        {console.log(this.props.module)}
        <p id="sem01_mod01" className="button">{this.props.module.title}</p>
      </div>
    )
  }
}

export default Module
