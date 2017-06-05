import React, { Component } from 'react';
import TodosListHeader from './Todos-list-header';
import TodosListItem from './Todos-list-item';
import _ from 'lodash';

class TodosList extends Component {

  

  renderItems(){

    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index}{...todo} {...props} />);
  }

  render() {
    console.log(this.props);

    return (
      <table>
              <TodosListHeader/>
              <tbody>
                  {this.renderItems()}
              </tbody>
      </table>
    );
  }
}

export default TodosList;
