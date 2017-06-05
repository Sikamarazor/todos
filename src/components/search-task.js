import React, { Component } from 'react';

class SearchTasks extends Component {

  render() {
      var onSearch1 = this.props.onSearch;
    return (
      <div>
        <input type="search" ref="filter" onChange={onSearch1} placeholder="search"/> 
      </div>
    );
  }
}

export default SearchTasks;
