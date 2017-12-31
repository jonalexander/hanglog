import React, { Component } from 'react'

class LogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'hang',   // hang || nohang
      method: 'max',  // max || repeater
      hold: '18mm Edge Beastmaker',
      weight: null,
      bodyweight: null,
    }
  }

  handleChange = (event) => {
    // this.setState({ field: value })
  }

  handleSubmit = (event) => {
    // put to dynamo table -- build out function later
  }

  createRange = (first, last) => {
    let range = []
    let incr = 1

    if ([typeof first, typeof last].indexOf('number') < 0) return range

    range[0] = first

    while (first + incr <= last) {
      range[range.length] = first += incr
    }

    return range
  }

  DropdownList = (props) => {
    const first = props.first || 0
    const last = props.last || 0

    return (
      <select>
        {this.createRange(-50, 100).map(num => <option key={ num.toString() } value={ num } onChange={ this.handleChange }> { num }</option>)}
      </select>
    )
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <label>Type</label>
        <select value={ this.state.type } onChange={ this.handleChange }>
          <option value="hang">Hang</option>
          <option value="nohang">No-Hang</option>
        </select>

        <label>Method</label>
        <select value={ this.state.method } onChange={ this.handleChange }>
          <option value="max">Max</option>
          <option value="repeater">Repeater</option>
        </select>

        <label>Hold</label>
        <select value={ this.state.hold } onChange={ this.handleChange }>
          <option value="18cmedgebeastmaker">18cm Edge Beastmaker</option>
        </select>

        <label>Weight</label>
          <select value="0">
            <DropdownList first={-50} last={100} />
          </select>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}
 export default LogForm
