export const getAngle = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  const dot = x1 * x2 + y1 * y2
  const det = x1 * y2 - y1 * x2
  const angle = Math.atan2(det, dot) / Math.PI * 180
  return (angle + 360) % 360
}

//角度转弧度
export const degToRadian = (deg) => deg * Math.PI / 180

/**
 * 获取下一时刻的矩形状态值
 * @param type 当前所拖拽的点位
 * @param delta 鼠标坐标
 * @param rect 上一时刻的矩形状态值
 * @returns {{size: {currWidth: *, currHeight: *}, position: {centerY: *, centerX: *}}}
 */
export const getNewStyle = (type, delta, rect) => {
  let { width, height, centerX, centerY, rotateAngle } = rect
  let { abs, cos, sin, tan, pow, atan } = Math

  rotateAngle = degToRadian(rotateAngle)

  //当拉上、下、左、右边时
  if (type === 't' || type === 'b' || type === 'l' || type === 'r') {
    const oldCenterX = centerX
    const oldCenterY = centerY
    let m = 1
    if (type === 't' || type === 'b') {
      m = type === 'b' ? m : -m
      height = m * (delta.deltaY - centerY) / cos(rotateAngle) + height / 2
      centerY = delta.deltaY - m * height / 2 * cos(rotateAngle)
      centerX = (oldCenterY - centerY) * tan(rotateAngle) + oldCenterX
    }

    if (type === 'l' || type === 'r') {
      m = type === 'r' ? m : -m
      width = m * (delta.deltaX - centerX) / cos(rotateAngle) + width / 2
      centerX = delta.deltaX - m * width / 2 * cos(rotateAngle)
      centerY = (centerX - oldCenterX) * tan(rotateAngle) + oldCenterY
    }

    //当拖拽四个顶角时
  } else if (type === 'br' || type === 'bl' || type === 'tr' || type === 'tl') {
    //拖拽点相对的顶点，即视觉上保持不变的点
    let relativeAngleX, relativeAngleY, i1 = 1, i2 = 1, c = 1
    //改变系数和rotateAngle的正负
    if (type === 'br') {
      i1 = -1
      i2 = -1
    } else if (type === 'bl') {
      i2 = -1
      c = -1
    } else if (type === 'tr') {
      i1 = -1
      c = -1
    } else if (type === 'tl') {
    }
    relativeAngleX = centerX + i1 * (cos(c * rotateAngle) * width / 2 - sin(c * rotateAngle) * height / 2)
    relativeAngleY = centerY + i2 * (sin(c * rotateAngle) * width / 2 + cos(c * rotateAngle) * height / 2)

    //拖拽后的中心点
    centerX = (delta.deltaX + relativeAngleX) / 2
    centerY = (delta.deltaY + relativeAngleY) / 2

    //对角线长度
    const diagonal = pow(pow(relativeAngleX - delta.deltaX, 2) + pow(relativeAngleY - delta.deltaY, 2), 0.5)

    const line_x = relativeAngleX - delta.deltaX
    const line_y = relativeAngleY - delta.deltaY

    //矩形内宽与对角线的夹角
    const angleB = atan(line_y / line_x) - rotateAngle
    width = diagonal * cos(angleB)
    height = diagonal * sin(angleB)

  }
  return {
    position: {
      centerX,
      centerY
    },
    size: {
      currWidth: abs(width),
      currHeight: abs(height)
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
