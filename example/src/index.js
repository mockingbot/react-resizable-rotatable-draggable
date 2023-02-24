import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import ResizableRect from 'react-resizable-rotatable-draggable'

class App extends PureComponent {
  constructor(props) {
    super(props)

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

  handleDrag = (left, top) => {
    this.setState({
      left: left,
      top: top
    })
  }

  render() {
    const { top, left, width, height, rotateAngle } = this.state
    return (
      <ResizableRect
        {...{
          // aspectRatio: 1,
          // minWidth: -Infinity,
          // minHeight: -Infinity,
          zoomable: 'n, w, s, e, nw, ne, se, sw',
          // rotatable: true,
          onRotate: this.handleRotate,
          onResize: this.handleResize,
          onDrag: this.handleDrag
          // haveBoundary: false,
          // color: 'red'
        }}
      >
        <img
          src="https://via.placeholder.com/200x300.png"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </ResizableRect>
    )
  }
}

const initExample = (rootElement = document.getElementById('root')) =>
  ReactDOM.render(<App />, rootElement)

export { initExample }
