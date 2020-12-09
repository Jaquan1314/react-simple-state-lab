import React, { Fragment, Component } from 'react';

class Cell extends Component {
  constructor(props) {
    // console.log(props)
    super()
    this.state = {
      color: props.value
    }
  }

  clickHandler = () => {
    // console.log('Been Clicked')
    this.setState({ color: '#333' })
  }

  render() {
    return(
      <div onClick={ this.clickHandler } className="cell" style={{ backgroundColor: this.state.color }} >

      </div>
    )
  }
}

export default Cell