import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { getLength, getAngle, getCursor } from '../utils'

import './index.css'

const zoomableMap = {
  n: 't',
  s: 'b',
  e: 'r',
  w: 'l',
  ne: 'tr',
  nw: 'tl',
  se: 'br',
  sw: 'bl'
}

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
    onDragEnd: PropTypes.func,
    parentRotateAngle: PropTypes.number,
    children: PropTypes.node,
    color: PropTypes.color,
    itemId: PropTypes.string,
    focusChange: PropTypes.bool,
    defaultFocus: PropTypes.bool,
    isDraggable: PropTypes.bool,
    onFocusChange: PropTypes.func,
    zIndex: PropTypes.number
  }

  constructor(props) {
    super(props)
    this.state = {
      isFocused: props.defaultFocus ?? false
    }
  }

  setElementRef = (ref) => {
    this.$element = ref
  }

  componentDidUpdate() {
    const { onFocusChange } = this.props
    onFocusChange && onFocusChange(this.state.isFocused)
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
    const {
      styles: {
        transform: { rotateAngle: startAngle }
      }
    } = this.props
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
    const {
      styles: {
        position: { centerX, centerY },
        size: { width, height },
        transform: { rotateAngle }
      }
    } = this.props
    const { clientX: startX, clientY: startY } = e
    const rect = { width, height, centerX, centerY, rotateAngle }
    const type = e.target.getAttribute('class').split(' ')[0]
    this.props.onResizeStart && this.props.onResizeStart()
    this._isMouseDown = true
    const onMove = (e) => {
      if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
      e.stopImmediatePropagation()
      const { clientX, clientY } = e
      const deltaX = clientX - startX
      const deltaY = clientY - startY
      const alpha = Math.atan2(deltaY, deltaX)
      const deltaL = getLength(deltaX, deltaY)
      const isShiftKey = e.shiftKey
      this.props.onResize(deltaL, alpha, rect, type, isShiftKey)
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

  onArrowBasedResize = (e) => {
    const {
      styles: {
        position: { centerX, centerY },
        size: { width, height },
        transform: { rotateAngle }
      }
    } = this.props

    const { clientX: startX, clientY: startY } = e
    const rect = { width, height, centerX, centerY, rotateAngle }

    let shiftPlusArrowKeyPressCount = 0

    const onKeyDown = (e) => {
      if (e.shiftKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        const deltaL =
          e.key === 'ArrowUp'
            ? ++shiftPlusArrowKeyPressCount
            : --shiftPlusArrowKeyPressCount // resize by one pixel
        const alpha = 0
        const isShiftKey = true
        this.props.onResize(deltaL, alpha, rect, 'r', isShiftKey)
      }
    }

    const onKeyUp = (e) => {
      if (e.shiftKey) return
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
  }

  render() {
    const {
      styles: {
        position: { centerX, centerY },
        size: { width, height },
        transform: { rotateAngle }
      },
      zoomable,
      rotatable,
      parentRotateAngle,
      children,
      color,
      itemId,
      focusChange,
      isDraggable,
      zIndex
    } = this.props

    const style = {
      width: isFocused ? Math.abs(width) : Math.abs(width) - 1,
      height: isFocused ? Math.abs(height) : Math.abs(height) - 1,
      transform: `rotate(${rotateAngle}deg)`,
      left: centerX - Math.abs(width) / 2,
      top: centerY - Math.abs(height) / 2
    }

    const direction = zoomable
      .split(',')
      .map((d) => d.trim())
      .filter((d) => d) // TODO: may be speed up

    const { isFocused } = this.state

    return (
      <>
        {isFocused ? (
          <div
            id={itemId}
            ref={this.setElementRef}
            onMouseDown={this.startDrag}
            className="rect single-resizer"
            style={{
              ...style,
              borderColor: color,
              position: isDraggable ? 'absolute' : 'relative',
              zIndex
            }}
            tabIndex="0"
            onFocus={() => focusChange && this.setState({ isFocused: true })}
            onBlur={() => focusChange && this.setState({ isFocused: false })}
            onClick={this.onArrowBasedResize}
          >
            {rotatable && (
              <div className="rotate" onMouseDown={this.startRotate}>
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z"
                    fill={color}
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            )}

            {direction.map((d) => {
              const cursor = `${getCursor(
                rotateAngle + parentRotateAngle,
                d
              )}-resize`
              return (
                <div
                  key={d}
                  className={`${zoomableMap[d]} resizable-handler`}
                  style={{ cursor }}
                  onMouseDown={(e) => this.startResize(e, cursor)}
                />
              )
            })}

            {direction.map((d) => {
              return (
                <div
                  key={d}
                  className={`${zoomableMap[d]} square`}
                  style={{ borderColor: color }}
                />
              )
            })}

            <div className="childContainer">{children}</div>
          </div>
        ) : (
          <div
            id={itemId}
            style={{
              ...style,
              position: isDraggable ? 'absolute' : 'relative'
            }}
            className="childContainer"
            onFocus={() => focusChange && this.setState({ isFocused: true })}
            onBlur={() => focusChange && this.setState({ isFocused: false })}
            tabIndex="0"
            onMouseDown={this.onArrowBasedResize}
          >
            {children}
          </div>
        )}
      </>
    )
  }
}
