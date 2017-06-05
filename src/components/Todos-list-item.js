import React, { Component } from 'react';


class TodosListItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing: false
    }
  }
  renderIncomplete(){

      if(!this.props.isCompleted)
      {
          return(
          <td>
               gfhgxdgnfdhgn
          </td>
      );
      }
  }
  renderTaskSection(){
    const{
      task, isCompleted 
    } = this.props;
    console.log(this.props);
    const taskStyle = {
      textDecorationLine:  isCompleted ? 'line-through' : 'none',
      cursor: 'pointer'
    };
    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />

          </form>
        </td>
      )
    }
    return(
          <td style={taskStyle}
              onClick={this.props.toggleTask.bind(this, task)}
          >{task} </td>
      );
  }
  renderActionSection(){
    if (this.state.isEditing){
      return(
        <td>
          
          <button onClick={this.onCancelClick.bind(this)}> Cancel </button>
        </td>
        );
      }
      return(
        <td>
         
          <button onClick={this.props.deleteTask.bind(this, this.props.task)}> Delete </button>
        </td>
      );
  }
  render() {
    return (
              <tr>
                  {this.renderTaskSection()}
                  {this.renderActionSection()}
              </tr>
          
    );
  }
  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false});
  }
  onEditClick() {
    this.setState({ isEditing: true});
  }
  onCancelClick() {
    this.setState({ isEditing: false});
  }
  onIncomplete(){
      this.setState({ isCompleted:false});
  }
}

export default TodosListItem;
