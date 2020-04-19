import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { getLength, getAngle, getCursor } from '../utils'
import StyledRect from './StyledRect'

const zoomableMap = {
  'n': 't',
  's': 'b',
  'e': 'r',
  'w': 'l',
  'ne': 'tr',
  'nw': 'tl',
  'se': 'br',
  'sw': 'bl'
}

/**
 * 维护一组被操作的矩形组件
 */
export default class Rect extends PureComponent {
  static propTypes = {
    styles: PropTypes.object,
    zoomable: PropTypes.string,
    rotatable: PropTypes.bool,
    onResizeStart: PropTypes.func,
    onResize: PropTypes.func,
    onResizeEnd: PropTypes.func,
    onRotateStart: PropTypes.func,
    onRotate: PropTypes.func,
    onRotateEnd: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrag: PropTypes.func,
    onDragEnd: PropTypes.func
  }

  setElementRef = (ref) => {
    this.$element = ref
  }

  // Drag
  startDrag = (e) => {
    let { clientX: startX, clientY: startY } = e
    this.props.onDragStart && this.props.onDragStart()
    this._isMouseDown = true
    const onMove = (e) => {
      if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation()
      const { clientX, clientY } = e
      const deltaX = clientX - startX
      const deltaY = clientY - startY
      this.props.onDrag(deltaX, deltaY)
      startX = clientX
      startY = clientY
    }
    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      if (!this._isMouseDown) return
      this._isMouseDown = false
      this.props.onDragEnd && this.props.onDragEnd()
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  // Rotate
  startRotate = (e) => {
    if (e.button !== 0) return
    const { clientX, clientY } = e
    const { styles: { transform: { rotateAngle: startAngle } } } = this.props
    const rect = this.$element.getBoundingClientRect()
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }
    const startVector = {
      x: clientX - center.x,
      y: clientY - center.y
    }
    this.props.onRotateStart && this.props.onRotateStart()
    this._isMouseDown = true
    const onMove = (e) => {
      if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation()
      const { clientX, clientY } = e
      const rotateVector = {
        x: clientX - center.x,
        y: clientY - center.y
      }
      const angle = getAngle(startVector, rotateVector)
      this.props.onRotate(angle, startAngle)
    }
    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      if (!this._isMouseDown) return
      this._isMouseDown = false
      this.props.onRotateEnd && this.props.onRotateEnd()
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  // Resize
  startResize = (e, cursor) => {


    if (e.button !== 0) return
    document.body.style.cursor = cursor
    // 初始状态
    const { styles: { position: { centerX, centerY }, size: { width, height }, transform: { rotateAngle } } } = this.props
    // 当前鼠标坐标
    const { clientX: startX, clientY: startY } = e
    // 将初始状态维护到rect到对象中去
    const rect = { width, height, centerX, centerY, rotateAngle }
    // 获取当前选中的点的类型
    const type = e.target.getAttribute('class').split(' ')[0]
    // 在resize开始的时候调用
    this.props.onResizeStart && this.props.onResizeStart()
    // 标识状态：鼠标按下
    this._isMouseDown = true
    // 鼠标移动，计算内部
    const onMove = (e) => {
      if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation()
      const { clientX, clientY } = e
      // 相对坐标的偏移，基于当前帧的鼠标坐标 - 于上一帧帧的鼠标坐标
      // console.log('clientX',clientX)
      // console.log('rect',rect)
      const deltaX = clientX
      const deltaY = clientY
      // 将偏移存入delta对象中
      const delta = { deltaX, deltaY }
      // Math.atan2() 返回从原点(0,0)到(x,y)点的线段与x轴正方向之间的平面角度(弧度值)，也就是Math.atan2(y,x)
      // const alpha = Math.atan2(deltaY, deltaX)
      // 获取到原点的线段长度
      // const deltaL = getLength(deltaX, deltaY)

      const isShiftKey = e.shiftKey
      this.props.onResize(delta, rect, type, isShiftKey)
    }

    const onUp = () => {
      document.body.style.cursor = 'auto'
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      if (!this._isMouseDown) return
      this._isMouseDown = false
      this.props.onResizeEnd && this.props.onResizeEnd()
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  render () {
    const {
      styles: {
        position: { centerX, centerY },
        size: { width, height },
        transform: { rotateAngle }
      },
      zoomable,
      rotatable
    } = this.props
    const style = {
      width: Math.abs(width),
      height: Math.abs(height),
      transform: `rotate(${rotateAngle}deg)`,
      left: centerX - Math.abs(width) / 2,
      top: centerY - Math.abs(height) / 2
    }
    const direction = zoomable.split(',').map(d => d.trim()).filter(d => d) // TODO: may be speed up

    return (
      <StyledRect
        ref={this.setElementRef}
        onMouseDown={this.startDrag}
        className="rect single-resizer"
        style={style}
        draggable={false}
      >
        {
          rotatable &&
          <div className="rotate" onMouseDown={this.startRotate}>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z"
                fill="#eb5648"
                fillRule="nonzero"
              />
            </svg>
          </div>
        }

        {
          direction.map(d => {
            const cursor = `${getCursor(rotateAngle, d)}-resize`
            return (
              <div key={d} style={{ cursor }} className={`${zoomableMap[d]} resizable-handler`}
                   onMouseDown={(e) => this.startResize(e, cursor)}/>
            )
          })
        }

        {
          direction.map(d => {
            return (
              <div key={d} className={`${zoomableMap[d]} square`}/>
            )
          })
        }
      </StyledRect>
    )
  }
}
