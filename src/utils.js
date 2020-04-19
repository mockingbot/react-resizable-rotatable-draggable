export const getLength = (x, y) => Math.sqrt(x * x + y * y)

export const getAngle = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  const dot = x1 * x2 + y1 * y2
  const det = x1 * y2 - y1 * x2
  const angle = Math.atan2(det, dot) / Math.PI * 180
  return (angle + 360) % 360
}

/**
 * 角度转弧度
 */
export const degToRadian = (deg) => deg * Math.PI / 180

export const getNewStyle = (type, delta, rect, a, b, ratio, minWidth, minHeight) => {
  let { width, height, centerX, centerY, rotateAngle } = rect
  let { abs, cos, sin, tan , pow, atan } = Math

  width = abs(width)
  height = abs(height)
  rotateAngle = degToRadian(rotateAngle)

  switch (type) {
    case 't': {
      const oldCenterX = centerX
      const oldCenterY = centerY
      height = (centerY - delta.deltaY) / cos(rotateAngle) + height / 2
      centerY = delta.deltaY + height / 2 * cos(rotateAngle)
      centerX = (oldCenterY - centerY) * tan(rotateAngle) + oldCenterX
      break
    }
    case 'b': {
      const oldCenterX = centerX
      const oldCenterY = centerY
      height = (delta.deltaY - centerY) / cos(rotateAngle) + height / 2
      centerY = delta.deltaY - height / 2 * cos(rotateAngle)
      centerX = (oldCenterY - centerY) * tan(rotateAngle) + oldCenterX
      break
    }
    case 'l': {
      const oldCenterX = centerX
      const oldCenterY = centerY
      width = (centerX - delta.deltaX) / cos(rotateAngle) + width / 2
      centerX = delta.deltaX + width / 2 * cos(rotateAngle)
      centerY = (centerX - oldCenterX) * tan(rotateAngle) + oldCenterY
      break
    }
    case 'r': {
      const oldCenterX = centerX
      const oldCenterY = centerY

      width = (delta.deltaX - centerX) / cos(rotateAngle) + width / 2
      centerX = delta.deltaX - width / 2 * cos(rotateAngle)
      centerY = (centerX - oldCenterX) * tan(rotateAngle) + oldCenterY
      break
    }
    case 'br': {
      let rbX = centerX - (cos(rotateAngle) * width / 2) + (sin(rotateAngle) * height / 2)
      let rbY = centerY - (sin(rotateAngle) * width / 2) - (cos(rotateAngle) * height / 2)

      centerX = (delta.deltaX + rbX) / 2
      centerY = (delta.deltaY + rbY) / 2

      const diagonal = pow(pow(rbX - delta.deltaX, 2) + pow(rbY - delta.deltaY, 2), 0.5)

      console.log('diagonal', diagonal)

      const line_x = rbX - delta.deltaX
      const line_y = rbY - delta.deltaY

      //矩形内宽与对角线的夹角
      let angleB = atan(line_y / line_x) - rotateAngle
      width = diagonal * cos(angleB)
      height = diagonal * sin(angleB)

      break
    }
    case 'bl': {
      let rbX = centerX + (cos(  - rotateAngle) * width / 2) - (sin( - rotateAngle) * height / 2)
      let rbY = centerY - (sin(  - rotateAngle) * width / 2) - (cos( - rotateAngle) * height / 2)

      centerX = (delta.deltaX + rbX) / 2
      centerY = (delta.deltaY + rbY) / 2

      const diagonal = pow(pow(rbX - delta.deltaX, 2) + pow(rbY - delta.deltaY, 2), 0.5)

      const line_x = rbX - delta.deltaX
      const line_y = rbY - delta.deltaY

      //矩形内宽与对角线的夹角
      let angleB = atan(line_y / line_x) - rotateAngle
      width = diagonal * cos(angleB)
      height = diagonal * sin(angleB)

      break
    }
    case 'tr': {
      let rbX = centerX - (cos( - rotateAngle) * width / 2) + (sin( - rotateAngle) * height / 2)
      let rbY = centerY + (sin( - rotateAngle) * width / 2) + (cos( - rotateAngle) * height / 2)

      centerX = (delta.deltaX + rbX) / 2
      centerY = (delta.deltaY + rbY) / 2

      const diagonal = pow(pow(rbX - delta.deltaX, 2) + pow(rbY - delta.deltaY, 2), 0.5)

      const line_x = rbX - delta.deltaX
      const line_y = rbY - delta.deltaY

      //矩形内宽与对角线的夹角
      let angleB = atan(line_y / line_x) - rotateAngle
      width = diagonal * cos(angleB)
      height = diagonal * sin(angleB)

      break
    }
    case 'tl': {
      let rbX = (cos(rotateAngle) * width / 2) - (sin(rotateAngle) * height / 2) + centerX
      let rbY = (sin(rotateAngle) * width / 2) + (cos(rotateAngle) * height / 2) + centerY

      centerX = (delta.deltaX + rbX) / 2
      centerY = (delta.deltaY + rbY) / 2

      const diagonal = pow(pow(rbX - delta.deltaX, 2) + pow(rbY - delta.deltaY, 2), 0.5)

      console.log('diagonal', diagonal)

      const line_x = rbX - delta.deltaX
      const line_y = rbY - delta.deltaY

      //矩形内宽与对角线的夹角
      let angleB = atan(line_y / line_x) - rotateAngle
      width = diagonal * cos(angleB)
      height = diagonal * sin(angleB)

      break
    }
  }
  return {
    position: {
      centerX,
      centerY
    },
    size: {
      currWidth: width,
      currHeight: height
    }
  }
}
const cursorStartMap = { n: 0, ne: 1, e: 2, se: 3, s: 4, sw: 5, w: 6, nw: 7 }
const cursorDirectionArray = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']
const cursorMap = { 0: 0, 1: 1, 2: 2, 3: 2, 4: 3, 5: 4, 6: 4, 7: 5, 8: 6, 9: 6, 10: 7, 11: 8 }
export const getCursor = (rotateAngle, d) => {
  const increment = cursorMap[Math.floor(rotateAngle / 30)]
  const index = cursorStartMap[d]
  const newIndex = (index + increment) % 8
  return cursorDirectionArray[newIndex]
}

export const centerToTL = ({ centerX, centerY, width, height, rotateAngle }) => ({
  top: centerY - height / 2,
  left: centerX - width / 2,
  width,
  height,
  rotateAngle
})

/**
 * 将传入的点位格式化为被Rect识别的函数
 */
export const formatCenter = ({ y, x, width, height, rotateAngle }) => ({
  position: {
    centerX: x,
    centerY: y
  },
  size: {
    width,
    height
  },
  transform: {
    rotateAngle
  }
})
