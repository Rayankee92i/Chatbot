import { useEffect, useState } from 'react';
import './Squares.css';

export function Squares({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor = '#000000',
  hoverFillColor = '#f00000'
}) {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    function createGrid() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cols = Math.ceil(w / squareSize) + 1;
      const rows = Math.ceil(h / squareSize) + 1;
      const arr = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          arr.push({ x, y, key: `${x}-${y}` });
        }
      }
      setGrid(arr);
    }

    createGrid();
    window.addEventListener('resize', createGrid);
    return () => window.removeEventListener('resize', createGrid);
  }, [squareSize]);

  // choose animation class based on direction
  const animationClass =
    direction === 'diagonal'
      ? 'move-diagonal'
      : direction === 'horizontal'
      ? 'move-horizontal'
      : 'move-vertical';

  const styleVars = {
    '--square-size': `${squareSize}px`,
    '--border-color': borderColor,
    '--hover-color': hoverFillColor,
    '--animation-duration': `${1 / speed}s`
  };

  return (
    <div className={`squares-container ${animationClass}`} style={styleVars}>
      {grid.map((g) => (
        <div
          key={g.key}
          className="square"
          style={{
            width: squareSize,
            height: squareSize,
            left: g.x * squareSize,
            top: g.y * squareSize,
            borderColor
          }}
        />
      ))}
    </div>
  );
}
