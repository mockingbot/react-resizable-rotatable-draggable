import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import ResizableRect from 'react-resizable-rotatable-draggable'
import styles from './index.module.css'
import Properties from './components/Properties'

const ZOOM_DIRECTIONS = 'n, w, s, e, nw, ne, se, sw'

const App = () => {
  const [height, setHeight] = useState(100)
  const [width, setWidth] = useState(100)
  const [top, setTop] = useState(100)
  const [left, setLeft] = useState(100)

  const handleResize = (values) => {
    setTop(Math.round(values.top))
    setLeft(Math.round(values.left))
    setWidth(Math.round(values.width))
    setHeight(Math.round(values.height))
  }

  const handleDrag = (left, top) => {
    setTop(top)
    setLeft(left)
  }

  return (
    <div className={styles['app_container']}>
      <div className={styles['app_container__col_1']}>
        <ResizableRect
          zoomable={ZOOM_DIRECTIONS}
          onResize={handleResize}
          onDrag={handleDrag}
          height={height}
          width={width}
          top={top}
          left={left}
        >
          <div style={{ width: '100%', height: '100%', background: 'cyan' }} />
        </ResizableRect>
      </div>

      <div className={styles['app_container__col_2']}>
        <Properties
          properties={[
            {
              name: 'Height',
              value: height
            },
            {
              name: 'Width',
              value: width
            },
            {
              name: 'Top',
              value: top
            },
            {
              name: 'Left',
              value: left
            }
          ]}
        />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
