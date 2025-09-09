'use client'

import { clsx } from 'clsx'
import { useRef } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../public/lottie/logo.json'
// Import your JSON file - adjust the path as needed
// import hangerAnimation from './path-to-your-lottie-file.json'

export function Logo({ className }) {
  const lottieRef = useRef()

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      // Stop current animation and play from beginning
      lottieRef.current.stop()
      lottieRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    // Optional: You can stop the animation on mouse leave
    // lottieRef.current?.stop()
  }

  return (
    <div 
      className={clsx(className, 'cursor-pointer')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={true}
        style={{ width: 100, height: 100, translate: '0px -25px' }}
      />
    </div>
  )
}

export function Mark({ className }) {
  const lottieRef = useRef()

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.stop()
      lottieRef.current.play()
    }
  }

  return (
    <div 
      className={clsx(className, 'cursor-pointer')}
      onMouseEnter={handleMouseEnter}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={true}
        style={{ width: 50, height: 40 }}
      />
    </div>
  )
}