import React, { useState } from 'react'
import MovingText from 'react-moving-text'

const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]

const AnimationChain = () => {

  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setCounter(animationIndex+1)
    setAnimationType(selectedItems[animationIndex+1])
  }

  return (
    <MovingText
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="1000ms"
      timing="linear"
      iteration={1}>
      MovingText
    </MovingText>
  )
}
