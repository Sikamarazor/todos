import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTodo from './components/Create-todo';
import TodosList from './components/TodosList';
import SearchTasks from './components/search-task';
import IncompleteTask from './components/Incomplete-tasks';
import _ from 'lodash';

var todos = [{
  task: 'Read books',
  isCompleted: true

},{
  task: 'Study tutorial',
  isCompleted: false

},{
  task: 'Write tutorial',
  isCompleted: false

},{
  task: 'Complete assignment',
  isCompleted: true

}
];


class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      todos
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todo tasks</h2>
        </div>
        <div>
          <h2>Managers To do tasks </h2>
        </div>
        <div>
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
        <IncompleteTask/>
        <SearchTasks onSearch={this.searchItem}/>
        <TodosList todos={this.state.todos} 
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
          />
        </div>
      </div>
    );
  }
  toggleTask(task) {
      const foundTodo = _.find(this.state.todos, todo => todo.task === task);
      foundTodo.isCompleted = !foundTodo.isCompleted;
      this.setState({ todos: this.state.todos });
  }
  createTask(task){
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({todos:this.state.todos})

  }
  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);

    foundTodo.task = newTask;
    this.setState({todos: this.state.todos});
  }
  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({todos: this.state.todos});
  }
  searchItem(e){
      this.state.filter[0].keyword = e.target.value;
      this.setState({
        filter: this.state.filter
      })
  }
}

export default App;
