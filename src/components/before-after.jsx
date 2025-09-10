'use client'

import { useCallback, useRef, useState } from 'react'

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before',
  afterAlt = 'After',
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return
      e.preventDefault()
      handleMove(e.clientX)
    },
    [isDragging, handleMove],
  )

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return
      e.preventDefault()
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove],
  )

  const startDragging = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const stopDragging = () => setIsDragging(false)

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        ref={containerRef}
        className="relative aspect-square w-full max-w-md overflow-hidden select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
        style={{ touchAction: 'none' }}
      >
        {/* Before Image (Background) - clipped from LEFT (shows on RIGHT side) */}
        <div
          className="absolute translate-y-1/5 inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
            WebkitClipPath: `inset(0 0 0 ${sliderPosition}%)`,
          }}
        >
            <img
            src={beforeImage}
            alt={beforeAlt}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
            />
        </div>  
        
        {/* After Image (Foreground) - clipped from RIGHT (shows on LEFT side) */}
        <div
          className="absolute translate-y-1/5 inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img
            src={afterImage}
            alt={afterAlt}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-white/100 via-transparent to-transparent pointer-events-none" />

        {/* Slider Line and Handle */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-black"
          style={{ left: `${sliderPosition}%` }}
        >
          <div
            className="absolute top-1/2 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-black shadow-lg transition-transform hover:scale-110"
            onMouseDown={startDragging}
            onTouchStart={startDragging}
          >
            <svg
              className="h-5 w-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.41 16.59L5.83 12l4.58-4.59L9 6l-6 6 6 6 1.41-1.41z" />
              <path d="M13.59 7.41L18.17 12l-4.58 4.59L15 18l6-6-6-6-1.41 1.41z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}