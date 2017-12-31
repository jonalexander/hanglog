import React, { Component } from 'react'

class LogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'hang',   // hang || nohang
      method: 'max',  // max || repeater
      hold: '18mm Edge Beastmaker',
      weight: 0,
      bodyweight: 0,
    }
  }

  handleChange = (event) => {
    // this.setState({ field: value })
    console.log(event.target.name, event.target.value)
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // put to dynamo table -- build out function later
  }

  createRangeDropdown = (props) => {
    let { range, options } = props
    console.log('options', options)

    return this.createRange(range[0], range[1]).map(num => {
      return <option onChange={ this.handleChange }
                     key={ num.toString() }
                     value={ num }>
                     { num }
                     </option>
    })

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

  render() {
    const DropdownRange = (props) => this.createRangeDropdown(props)

    return(
      <form onSubmit={ this.handleSubmit }>
        <label>Type</label>
        <select name="type" value={ this.state.type } onChange={ this.handleChange }>
          <option value="hang">Hang</option>
          <option value="nohang">No-Hang</option>
        </select>

        <label>Method</label>
        <select name="method" value={ this.state.method } onChange={ this.handleChange }>
          <option value="max">Max</option>
          <option value="repeater">Repeater</option>
        </select>

        <label>Hold</label>
        <select name="hold" value={ this.state.hold } onChange={ this.handleChange }>
          <option value="18cmedgebeastmaker">18cm Edge Beastmaker</option>
        </select>

        <label>Additional Weight</label>
        <select name="weight" value={ this.state.weight } onChange={ this.handleChange }>
          <DropdownRange range={[-50, 100]} options='add-weight'/>
        </select>

        <label>Body Weight</label>
        <input name="bodyweight" type="text" value={ this.state.bodyweight } onChange={ this.handleChange } />

        <input type="submit" value="Submit" />
      </form>
    )
  }
}
 export default LogForm
