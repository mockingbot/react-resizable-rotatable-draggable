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

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    })
  }

  handleRotateEnd = () => console.log('RotateEnd')

  handleRotateStart = () => console.log('RotateStart')

  render() {
    const { top, left, width, height, rotateAngle } = this.state
    return (
      <ResizableRect
        {...{
          top,
          left,
          width,
          height,
          rotateAngle,
          // aspectRatio: false,
          minWidth: -Infinity,
          minHeight: -Infinity,
          zoomable: 'n, w, s, e, nw, ne, se, sw',
          // rotatable: true,
          onRotateStart: this.handleRotateStart,
          onRotate: this.handleRotate,
          onRotateEnd: this.handleRotateEnd,
          // onResizeStart: this.handleResizeStart,
          onResize: this.handleResize,
          // onResizeEnd: this.handleUp,
          // onDragStart: this.handleDragStart,
          onDrag: this.handleDrag
          // onDragEnd: this.handleDragEnd,
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
