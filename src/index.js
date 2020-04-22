import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Rect from './Rect'
import { getNewStyle, formatCenter } from './utils'

export default class ResizableRect extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    rotatable: PropTypes.bool,
    rotateAngle: PropTypes.number,
    zoomable: PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    minWidth: PropTypes.number,
    // eslint-disable-next-line react/no-unused-prop-types
    minHeight: PropTypes.number,
    // eslint-disable-next-line react/no-unused-prop-types
    aspectRatio: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool
    ]),
    onRotateStart: PropTypes.func,
    onRotate: PropTypes.func,
    onRotateEnd: PropTypes.func,
    onResizeStart: PropTypes.func,
    onResize: PropTypes.func,
    onResizeEnd: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrag: PropTypes.func,
    onDragEnd: PropTypes.func
  }

  static defaultProps = {
    rotateAngle: 0,
    rotatable: true,
    zoomable: '',
    minWidth: 10,
    minHeight: 10
  }

  /**
   * 执行旋转
   */
  handleRotate = (angle, startAngle) => {
    if (!this.props.onRotate) return
    let rotateAngle = Math.round(startAngle + angle)
    if (rotateAngle >= 360) {
      rotateAngle -= 360
    } else if (rotateAngle < 0) {
      rotateAngle += 360
    }
    if (rotateAngle > 356 || rotateAngle < 4) {
      rotateAngle = 0
    } else if (rotateAngle > 86 && rotateAngle < 94) {
      rotateAngle = 90
    } else if (rotateAngle > 176 && rotateAngle < 184) {
      rotateAngle = 180
    } else if (rotateAngle > 266 && rotateAngle < 274) {
      rotateAngle = 270
    }
    this.props.onRotate(rotateAngle)
  }

  /**
   * 调整大小
   */
  handleResize = (delta, rect, type, isShiftKey) => {
    // 当onResize没有指定内容，即看成不使用调整大小功能，则不执行Resize功能
    if (!this.props.onResize) return
    let {
      position: { centerX, centerY },
      size: { currWidth, currHeight }
    } = getNewStyle(type, delta, rect)
    this.props.onResize({ x: centerX, y: centerY, width: currWidth, height: currHeight }, isShiftKey, type)
  }

  /**
   * 当执行拖拽功能时，执行库的使用者传入的拖拽函数
   */
  handleDrag = (deltaX, deltaY) => {
    this.props.onDrag && this.props.onDrag(deltaX, deltaY)
  }

  render () {
    const {
      y, x, width, height, rotateAngle, zoomable, rotatable,
      onRotate, onResizeStart, onResizeEnd, onRotateStart, onRotateEnd, onDragStart, onDragEnd
    } = this.props

    const styles = formatCenter({ y, x, width, height, rotateAngle })

    return (
      // 引入Rect组件，当执行on状态时，执行对应方法
      <Rect
        styles={styles}
        zoomable={zoomable}
        rotatable={Boolean(rotatable && onRotate)}

        onResizeStart={onResizeStart}
        onResize={this.handleResize}
        onResizeEnd={onResizeEnd}

        onRotateStart={onRotateStart}
        onRotate={this.handleRotate}
        onRotateEnd={onRotateEnd}

        onDragStart={onDragStart}
        onDrag={this.handleDrag}
        onDragEnd={onDragEnd}
      />
    )
  }
}
