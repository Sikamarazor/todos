import React, { Component } from 'react';


class TodosListHeader extends Component {
  render() {
    return (
          <thead>
              <tr>
                  <th> Tasks </th>
                  <th> actions </th>
              </tr>
          </thead>
    );
  }
}

export default TodosListHeader;
