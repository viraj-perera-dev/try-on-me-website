'use client'

import Lottie from 'lottie-react'
import { useEffect, useRef, useState } from 'react'

export function LottieAnimation({
  src,
  animationData,
  style = {
    width: '100%',
    height: '100%',
    maxWidth: '200px',
    maxHeight: '200px',
  },
  loop = false,
  autoplay = true,
}) {
  const [loadedAnimationData, setLoadedAnimationData] = useState(animationData)
  const [loading, setLoading] = useState(!animationData && !!src)

    const lottieRef = useRef()
  
    const handleMouseEnter = () => {
      if (lottieRef.current) {
        lottieRef.current.stop()
        lottieRef.current.play()
      }
    }

  useEffect(() => {
    if (src && !animationData) {
      fetch(src)
        .then((response) => response.json())
        .then((data) => {
          setLoadedAnimationData(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Failed to load Lottie animation:', error)
          setLoading(false)
        })
    }
  }, [src, animationData])

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!loadedAnimationData) {
    return (
      <div className="flex h-full items-center justify-center text-gray-500">
        Animation not found
      </div>
    )
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      onMouseEnter={handleMouseEnter}
      animationData={loadedAnimationData}
      style={style}
      loop={loop}
      autoplay={autoplay}
    />
  )
}
