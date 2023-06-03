import React, { useState, useEffect } from 'react';

const CircleCursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [targetY, setTargetY] = useState(-40);
  const [targetX, setTargetX] = useState(500);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTargetX(event.clientX);
      setTargetY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateCursor = () => {
      setCursorX((prevX) => prevX + (targetX - prevX) * 0.6);
      setCursorY((prevY) => prevY + (targetY - prevY) * 0.6);
      requestAnimationFrame(updateCursor);
    };

    requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [targetX, targetY]);

  return (
    <>
      <style jsx global>{`
        .circle {
          width: 20px;
          height: 20px;
          border-radius: 50px;
          background-color: #fff;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transform: translate(-50%, -50%);
        }
      `}</style>
      <div className="circle" style={{ left: cursorX, top: cursorY }}></div>
    </>
  );
};

export default CircleCursor;
