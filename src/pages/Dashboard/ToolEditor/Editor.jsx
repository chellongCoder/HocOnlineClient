import React, { Component } from 'react'
import Editor from 'for-editor';

export default class EditorComponent extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  handleChange(value) {
    this.setState({
      value
    })
  }

  render() {
    const { value } = this.state
    return (
        <div style={{

        }}>
          <Editor 
          value={value} 
          placeholder="Write down here. please!"
          onChange={this.handleChange.bind(this)} />
        </div>
    )
  }
}
