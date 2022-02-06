import React from 'react';
import './PostAddForm.css'

export default class PostAddForm extends React.Component {
constructor(props){
  super(props);
  this.state = {
    post: ''
  }
  this.onSubmit = this.onSubmit.bind(this)
}

onSubmit(e){
  e.preventDefault();
  this.props.onAdd(this.state.post)

  this.setState({
    post: ''
  })
}

  render(){
    return(
      <form className='bottom-panel d-flex' onSubmit={this.onSubmit}>
        <input 
          type="text"
          className='form-control new-post-label'
          placeholder='Add some posts'
          value={this.state.post}
          onChange={(e) => this.setState({post: e.target.value})}
          />
        <button type='submit' className='btn btn-outline-secondary'>Add</button>
      </form>
    )
  }
}
