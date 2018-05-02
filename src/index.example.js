import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ResizableRect from './ResizableRect'
import styled from 'styled-components'

const RootDiv = styled.div`
text-align: center;

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`

class AppExample extends Component {
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

  handleResize = (style, isShiftKey, type) => {
    let { top, left, width, height } = style
    top = Math.round(top)
    left = Math.round(left)
    width = Math.round(width)
    height = Math.round(height)
    this.setState({
      top,
      left,
      width,
      height
    })
  }

  handleRotate = (rotateAngle) => {
    this.setState({
      rotateAngle
    })
  }

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    })
  }

  render () {
    const { width, top, left, height, rotateAngle } = this.state

    return (
      <RootDiv className="App">
        <ResizableRect
          {...{ left, top, width, height, rotateAngle }}
          // aspectRatio={false}
          // minWidth={10}
          // minHeight={10}
          zoomable='n, w, s, e, nw, ne, se, sw'
          // rotatable={true}
          // onRotateStart={this.handleRotateStart}
          onRotate={this.handleRotate}
          // onRotateEnd={this.handleRotateEnd}
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

const init = (element) => { ReactDOM.render(<AppExample />, element) }

export { init }
