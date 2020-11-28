import React, { useEffect, useRef } from 'react'
import p5 from 'p5'
import SpiderSketch from './spider-sketch'
import styled from 'styled-components'

const Button = styled.div`
  fontSize: 40,
  fontWeight: 'bold',
  fontFamily: 'Source Sans Pro',
  &:hover {
    cursor: pointer;
  }
`
type Props = {
  onContinue: () => void
}

const LandingPage: React.FC<Props> = ({ onContinue }: Props) => {
  const canvas = useRef<HTMLElement>()

  useEffect(() => {
    new p5(SpiderSketch, canvas.current)
  })
  return (
    <div
      style={{
        color: 'black',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          fontFamily: 'Source Sans Pro',
        }}
      >
        Generative Art
      </div>
      <Button
        style={{
          fontSize: 25,
          fontWeight: 'normal',
          fontFamily: 'Source Sans Pro',
        }}
        onClick={() => {
          console.log('da')
        }}
      >
        Enter
      </Button>
    </div>
  )
}
// margin: 0; height: 100%; overflow: hidden
export default LandingPage

// position: fixed;
// overflow-y: scroll;
// top: 0; right: 0; bottom: 0; left: 0; }
