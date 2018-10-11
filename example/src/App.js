import React, { Component } from 'react'

import Resizer from 'react-resizable-rotatable-draggable'
import styled from 'styled-components'

const RootDiv = styled.div`
  text-align: center;
`

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      width: 100,
      height: 100,
      top: 100,
      left: 100,
      rotateAngle: 0
    }
  }

  handleResize = ({ top, left, width, height }, isShiftKey, type) => {
    this.setState({
      top: Math.round(top),
      left: Math.round(left),
      width: Math.round(width),
      height: Math.round(height)
    })
  }

  handleRotate = (rotateAngle) => {
    this.setState({ rotateAngle })
  }

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    })
  }

  handleRotateEnd = () => console.log('aa')

  handleRotateStart = () => console.log('start')

  render () {
    const { width, top, left, height, rotateAngle } = this.state

    return (
      <RootDiv className="App">
        <Resizer
          top={top}
          left={left}
          width={width}
          height={height}
          rotateAngle={rotateAngle}

          // aspectRatio={false}
          minWidth={-Infinity}
          minHeight={-Infinity}
          zoomable="n, w, s, e, nw, ne, se, sw"
          // rotatable={true}
          onRotateStart={this.handleRotateStart}
          onRotate={this.handleRotate}
          onRotateEnd={this.handleRotateEnd}
          // onResizeStart={this.handleResizeStart}
          onResize={this.handleResize}
          // onResizeEnd={this.handleUp}
          // onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
          // onDragEnd={this.handleDragEnd}
        />
      </RootDiv>
    )
  }
}
