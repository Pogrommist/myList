import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import { connect } from 'react-redux'

import FormInput from './../components/formInput'

class App extends Component {
  addTask(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Task managment</h2>
        </div>
        <div className="container form-container">
          <form className="form add-task-form">
            <FormInput name="Имя задачи"/>
            <FormInput name="Описание"/>
            <button onClick={this.addTask.bind(this)}>Создать</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onAddTask: (name) => {
      const payload = {
        id: Date.Now().toString(),
        name
      }
    dispatch({ type: 'ADD_TASK', payload});
    }
  })
)(App);
