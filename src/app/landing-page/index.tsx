import React, { useEffect, useRef } from 'react'
import p5 from 'p5'
import SpiderSketch from './spider-sketch'
import styled from 'styled-components'

const Container = styled.div`
  color: black;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  font-family: Source Sans Pro;
`

const Button = styled.div`
  font-size: 25;
  font-family: Source Sans Pro;
  &:hover {
    cursor: pointer;
  }
  font-style: italic;
`

type Props = {
  onContinue: () => void
}

const LandingPage: React.FC<Props> = ({ onContinue }: Props) => {
  const canvas = useRef<HTMLElement>()
  const sketch = useRef<p5>()

  useEffect(() => {
    sketch.current = new p5(SpiderSketch, canvas.current)
  }, [])

  return (
    <div
      ref={() => canvas.current}
      style={{
        position: 'absolute',
        justifyContent: 'center',
        display: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <Container>
        <div
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'Source Sans Pro',
            paddingBottom: 10,
          }}
        >
          Generative Art
        </div>
        <div
          style={{
            fontSize: 25,
            fontFamily: 'Source Sans Pro',
            paddingBottom: 10,
          }}
        >
          Rita Cabrito, Armando Gonzalez and Chris Newth
        </div>
        <Button
          onClick={() => {
            onContinue()
            sketch.current?.remove()
          }}
        >
          Enter
        </Button>
      </Container>
    </div>
  )
}

export default LandingPage
