import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import ResizableRect from 'react-resizable-rotatable-draggable'

const ZOOM_DIRECTIONS = "n, w, s, e, nw, ne, se, sw";

const App = () => {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [top, setTop] = useState(100);
  const [left, setLeft] = useState(100);
 
  const handleResize = (values) => {
    setTop(Math.round(top));
    setLeft(Math.round(left));
    setWidth(Math.round(width));
    setHeight(Math.round(height))
  }


  const handleDrag = (left, top) => {
    setTop(top);
    setLeft(left);
  }

    return (
      <div style={{height:'100vh', width: '100vw'}}>
        <button
          onClick={() => {
            setTop(10);
            setLeft(10);
            setWidth(150);
            setHeight(150)
          }}  
        >
          Update
        </button>

        <ResizableRect
          zoomable={ZOOM_DIRECTIONS}
          onResize={handleResize}
          onDrag={handleDrag}
          height={height}
          width={width}
          top={top}
          left={left}
          // initValues={{ top: 0, left: 0 }}
        >
          <div style={{ width: '100%', height: '100%', background: 'cyan' }} />
        </ResizableRect>
      </div>
    )
  
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);