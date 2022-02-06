import React, { Component } from "react";

class PostStatusFilter extends Component {
  constructor(props){
    super(props);
    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'like', label: 'Like'},
    ]
  }

  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const active = this.props.filter === name;
      const clazz = active ? 'btn btn-info' : ' btn btn-outline-secondary'
      return (
        <button 
        onClick={() => this.props.onFilterSelect(name)} key={name} type="button" className={clazz}>
          {label}
        </button>
      )
    })
    return <div className="btn-group">{buttons}</div>;
  }
}

export default PostStatusFilter;
