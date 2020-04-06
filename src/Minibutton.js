import React from 'react'
import './Minibutton.css'

export default class Minibutton extends React.Component {
  constructor() {
    super()
    this.state = {
      country: [
        {
          name: 'Japen',
          people: 100,
          newText: '',
        },
        {
          name: 'Russia',
          people: 200,
          newText: '',
        },
        {
          name: 'Ispania',
          people: 300,
          newText: '7',
        },
      ],
      text: '',
      newText: '',
      showInput: false,
    }
  }
  newInput = (r) => {
    this.setState({
      text: r.target.value,
      newText: '',
    })
  }
  newTasks = () => {
    this.setState({
      newText: '',
    })
  }
  onEnter = (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      this.state.country.push({ tasks: this.state.text })
      this.setState({ text: '' })
    }
  }
  toggleInput = () => {
    this.setState({ showInput: true })
  }
  render() {
    const tasks = this.state.country.map((d, index) => (
      <li key={index + 1}>{d.tasks}</li>
    ))
    return (
      <div className='baclog'>
        {this.state.showInput ? (
          <input
            className='input'
            value={this.state.text}
            onClick={this.newTasks}
            onChange={this.newInput}
            onKeyDown={this.onEnter}
          />
        ) : (
          ''
        )}
        <div className='tesk'>
          <ol>
            <li>{this.state.text}</li>
            {tasks}
          </ol>
        </div>
        <button className='button' onClick={this.toggleInput}>
          НАЖМИ на меня
        </button>
      </div>
    )
  }
}
