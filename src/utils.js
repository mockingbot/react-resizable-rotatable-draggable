export const getAngle = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  const dot = x1 * x2 + y1 * y2
  const det = x1 * y2 - y1 * x2
  const angle = Math.atan2(det, dot) / Math.PI * 180
  return (angle + 360) % 360
}

// 角度转弧度
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
  let { abs, cos, sin, tan, pow, atan, sqrt, PI } = Math

  rotateAngle = degToRadian(rotateAngle)

  // 当拉上、下、左、右边时
  if (type === 't' || type === 'b' || type === 'l' || type === 'r') {
    // 当前操作点位的原始坐标
    let currX, currY
    // 三角函数值
    let trigonometricValueX, trigonometricValueY
    // 斜率
    let slope
    // 方向的系数
    let plusMinusDirection
    // 基准值：高或宽
    let baseValue
    if (type === 'b' || type === 't') {
      baseValue = height
      slope = tan(-rotateAngle)
      // plusMinusDirection和trigonometricValue的系数值
      let _plusMinusDirectionAndTrigonometric = type === 'b' ? 1 : -1
      trigonometricValueX = -sin(rotateAngle) * _plusMinusDirectionAndTrigonometric
      trigonometricValueY = +cos(rotateAngle) * _plusMinusDirectionAndTrigonometric
      plusMinusDirection = ((rotateAngle >= 0 && rotateAngle < PI / 2) || (rotateAngle > 3 * PI / 2 && rotateAngle < 2 * PI) ? -_plusMinusDirectionAndTrigonometric : _plusMinusDirectionAndTrigonometric)
    } else if (type === 'r' || type === 'l') {
      baseValue = width
      slope = tan(PI / 2 - rotateAngle)
      let _plusMinusDirectionAndTrigonometric = type === 'r' ? 1 : -1
      trigonometricValueX = +cos(rotateAngle) * _plusMinusDirectionAndTrigonometric
      trigonometricValueY = +sin(rotateAngle) * _plusMinusDirectionAndTrigonometric
      plusMinusDirection = (rotateAngle >= PI ? _plusMinusDirectionAndTrigonometric : -_plusMinusDirectionAndTrigonometric)
    }

    currX = centerX + trigonometricValueX * baseValue / 2
    currY = centerY + trigonometricValueY * baseValue / 2
    // 直线在相对于坐标原点的偏移距离
    const offsetDistance = -delta.deltaY - slope * delta.deltaX
    // 在拉伸方向位移的距离
    const deltaValue = (slope * currX + currY + offsetDistance) / sqrt(pow(slope, 2) + pow(1, 2)) * plusMinusDirection
    if (type === 't' || type === 'b') {
      height = baseValue + deltaValue
    } else if (type === 'l' || type === 'r') {
      width = baseValue + deltaValue
    }
    // resize后的中点坐标
    centerX = centerX + trigonometricValueX * deltaValue / 2
    centerY = centerY + trigonometricValueY * deltaValue / 2

    // 当拖拽四个顶角时
  } else if (type === 'br' || type === 'bl' || type === 'tr' || type === 'tl') {
    // 拖拽点相对的顶点，即视觉上保持不变的点
    let relativeAngleX, relativeAngleY
    // 下面通式中用到的系数
    let plusMinus1 = 1; let plusMinus2 = 1; let plusMinus3 = 1
    // 改变系数和rotateAngle的正负
    if (type === 'br') {
      plusMinus1 = -1
      plusMinus2 = -1
    } else if (type === 'bl') {
      plusMinus2 = -1
      plusMinus3 = -1
    } else if (type === 'tr') {
      plusMinus1 = -1
      plusMinus3 = -1
    } else if (type === 'tl') {
    }
    relativeAngleX = centerX + plusMinus1 * (cos(plusMinus3 * rotateAngle) * width / 2 - sin(plusMinus3 * rotateAngle) * height / 2)
    relativeAngleY = centerY + plusMinus2 * (sin(plusMinus3 * rotateAngle) * width / 2 + cos(plusMinus3 * rotateAngle) * height / 2)

    // 拖拽后的中心点
    centerX = (delta.deltaX + relativeAngleX) / 2
    centerY = (delta.deltaY + relativeAngleY) / 2

    // 对角线长度
    const diagonal = pow(pow(relativeAngleX - delta.deltaX, 2) + pow(relativeAngleY - delta.deltaY, 2), 0.5)

    const lineX = relativeAngleX - delta.deltaX
    const lineY = relativeAngleY - delta.deltaY

    // 矩形内宽与对角线的夹角
    const angleB = atan(lineY / lineX) - rotateAngle

    // 拖拽后的宽和高
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
