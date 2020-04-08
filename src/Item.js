import React from 'react'

export default class Item extends React.Component {
  render() {
    return (
      <li
        onClick={this.props.theClick}
        style={{ backgroundColor: this.props.theColor }}
      >
        {this.props.theName}
      </li>
    )
  }
}
