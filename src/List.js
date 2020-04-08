import React from 'react'
import Item from './Item'

export default class List extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [
        {
          name: 'First',
          color: 'red',
        },
        {
          name: 'Second',
          color: 'green',
        },
        {
          name: 'Third',
          color: 'yellow',
        },
      ],
    }
  }

  handleClick = (key) => {
    this.setState({
      items: this.state.items.map((item, index) =>
        index === key ? { name: item.name, color: 'blue' } : item
      ),
    })
  }

  render() {
    const items = this.state.items.map((item, index) => (
      <Item
        theClick={this.handleClick.bind(this, index)}
        theName={item.name}
        theColor={item.color}
        key={index}
      ></Item>
    ))
    return <ul>{items}</ul>
  }
}
