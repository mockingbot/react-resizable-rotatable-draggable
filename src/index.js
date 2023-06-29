import React, { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'

import {
  centerToTL,
  tLToCenter,
  getNewStyle,
  degToRadian,
  isOutOfBoundary
} from './utils'
import Rect from './Rect'

export default function ResizableRect({
  rotatable = true,
  parentRotateAngle = 0,
  zoomable = '',
  minWidth = 10,
  minHeight = 10,
  aspectRatio,
  onRotateStart,
  onRotate,
  onRotateEnd,
  onResizeStart,
  onResize,
  onResizeEnd,
  onDragStart,
  onDrag,
  onDragEnd,
  children,
  color = 'black',
  haveBoundary = true,
  defaultRotateAngle = 0,
  defaultFocus = false,
  focusChange = true,
  id = 'default_id',
  onFocusChange,

  initValues,
  height: propHeight,
  width: propWidth,
  top: propTop,
  left: propLeft
}) {
  const [top, setTop] = useState(initValues?.top ?? 10)
  const [left, setLeft] = useState(initValues?.left ?? 10)
  const [width, setWidth] = useState(initValues?.width ?? 100)
  const [height, setHeight] = useState(initValues?.height ?? 100)
  const [rotateAngle, setRotateAngle] = useState(defaultRotateAngle)
  // const [itemId, setItemId] = useState(uuidv4())
  const [itemId, setItemId] = useState(id)

  const styles = tLToCenter({ top, left, width, height, rotateAngle })

  useEffect(() => {
    if (propHeight) {
      setHeight(propHeight)
    }
  }, [propHeight])

  useEffect(() => {
    if (propWidth) {
      setWidth(propWidth)
    }
  }, [propWidth])

  useEffect(() => {
    if (propTop) {
      setTop(propTop)
    }
  }, [propTop])

  useEffect(() => {
    if (propLeft) {
      setLeft(propLeft)
    }
  }, [propLeft])

  const handleRotate = (angle, startAngle) => {
    if (!onRotate) return
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

    setRotateAngle(rotateAngle)
    onRotate(rotateAngle)
  }

  const handleResize = (length, alpha, rect, type, isShiftKey) => {
    if (!onResize) return

    const beta = alpha - degToRadian(rotateAngle + parentRotateAngle)
    const deltaW = (length * Math.cos(beta)) / 1.5
    const deltaH = (length * Math.sin(beta)) / 1.5
    const ratio =
      isShiftKey && !aspectRatio ? rect.width / rect.height : aspectRatio
    const {
      position: { centerX, centerY },
      size: { width, height }
    } = getNewStyle(
      type,
      { ...rect, rotateAngle },
      deltaW,
      deltaH,
      ratio,
      minWidth,
      minHeight
    )

    const values = centerToTL({ centerX, centerY, width, height, rotateAngle })

    if (
      isOutOfBoundary(
        values.left,
        values.top,
        width,
        height,
        haveBoundary,
        itemId
      )
    ) {
      return
    }

    setHeight(height)
    setWidth(width)

    onResize(values, isShiftKey, type)
  }

  const handleDrag = (deltaX, deltaY) => {
    if (!onDrag) return

    const newLeft = left + deltaX
    const newTop = top + deltaY

    if (isOutOfBoundary(newLeft, newTop, width, height, haveBoundary, itemId)) {
      return
    }

    setLeft(newLeft)
    setTop(newTop)
    onDrag && onDrag(newLeft, newTop)
  }

  return (
    <Rect
      styles={styles}
      zoomable={zoomable}
      rotatable={Boolean(rotatable && onRotate)}
      parentRotateAngle={parentRotateAngle}
      onResizeStart={onResizeStart}
      onResize={handleResize}
      onResizeEnd={onResizeEnd}
      onRotateStart={onRotateStart}
      onRotate={handleRotate}
      onRotateEnd={onRotateEnd}
      onDragStart={onDragStart}
      onDrag={handleDrag}
      isDraggable={onDrag !== undefined}
      onDragEnd={onDragEnd}
      children={children}
      color={color}
      itemId={itemId}
      defaultFocus={defaultFocus}
      focusChange={focusChange}
      onFocusChange={onFocusChange}
    />
  )
}
