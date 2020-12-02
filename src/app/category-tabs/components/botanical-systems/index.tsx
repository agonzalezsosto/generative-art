import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import {
  TextContainer,
  Title,
  Body,
  Subtitle,
  P5Div,
  P5Subtitle,
  P5ControlsDiv,
} from '../text-components'
import {
  TreeSketch,
  updateDimA,
  updateDimB,
} from '../../../sketches/tree-sketch'

const BotanicalSystems: React.FC = () => {
  const canvas = useRef<HTMLElement>()
  const sketch = useRef<p5>()

  useEffect(() => {
    sketch.current = new p5(TreeSketch, canvas.current)
  })

  const changeDimA = (val: { target: { value: any } }) => {
    updateDimA(val.target.value)
  }

  const changeDimB = (val: { target: { value: any } }) => {
    updateDimB(val.target.value)
  }

  return (
    <TextContainer>
      <Title>Botanical Systems</Title>
      <Subtitle>Below you'll find some filler text</Subtitle>
      <Body>
        An L-system or Lindenmayer system is a parallel rewriting system and a
        type of formal grammar. An L-system consists of an alphabet of symbols
        that can be used to make strings, a collection of production rules that
        expand each symbol into some larger string of symbols, an initial
        "axiom" string from which to begin construction, and a mechanism for
        translating the generated strings into geometric structures. L-systems
        were introduced and developed in 1968 by Aristid Lindenmayer, a
        Hungarian theoretical biologist and botanist at the University of
        Utrecht. Lindenmayer used L-systems to describe the behaviour of plant
        cells and to model the growth processes of plant development. L-systems
        have also been used to model the morphology of a variety of organisms
        and can be used to generate self-similar fractals.
      </Body>
      <P5Div id="container-tree">
        <P5ControlsDiv>
          <input
            type="range"
            min="1"
            max="100"
            id="myRange"
            onChange={changeDimA}
          />
          <input
            type="range"
            min="1"
            max="100"
            id="myRange"
            onChange={changeDimB}
          />
        </P5ControlsDiv>
        <P5Subtitle>Fractal Tree</P5Subtitle>
      </P5Div>
      <Body>
        An L-system or Lindenmayer system is a parallel rewriting system and a
        type of formal grammar. An L-system consists of an alphabet of symbols
        that can be used to make strings, a collection of production rules that
        expand each symbol into some larger string of symbols, an initial
        "axiom" string from which to begin construction, and a mechanism for
        translating the generated strings into geometric structures. L-systems
        were introduced and developed in 1968 by Aristid Lindenmayer, a
        Hungarian theoretical biologist and botanist at the University of
        Utrecht. Lindenmayer used L-systems to describe the behaviour of plant
        cells and to model the growth processes of plant development. L-systems
        have also been used to model the morphology of a variety of organisms
        and can be used to generate self-similar fractals.
      </Body>
    </TextContainer>
  )
}

export default BotanicalSystems
