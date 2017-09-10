import React, { Component } from 'react'


export default class FormInput extends Component {
  render() {
    return(
      <div>
        <label htmlFor="taskName">{this.props.name}</label>
        <input type="text"
           className="addTaskInput"
           id="taskName"
           name={this.props.name}
           placeholder={this.props.name}
/>
      </div>
    )
  }
}
