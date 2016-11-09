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
        <p id="sem01_mod01" className="button" onMouseOver={this.props.changeStatus}>Programmierung 1</p>
      </div>
    )
  }
}

export default Module
