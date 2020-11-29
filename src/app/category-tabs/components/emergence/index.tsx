import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import GolSketch from './gol-sketch'
import {
  TextContainer,
  Title,
  Body,
  Subtitle,
  P5Div,
  P5Subtitle,
} from '../text-components'

const Emergence: React.FC = () => {
  const canvas = useRef<HTMLElement>()
  const sketch = useRef<p5>()

  useEffect(() => {
    sketch.current = new p5(GolSketch, canvas.current)
  }, [])

  return (
    <TextContainer>
      <Title>Emergence</Title>
      <Subtitle>Below you'll find some filler text</Subtitle>
      <Body>
        In late 1940, John von Neumann defined life as a creation (as a being or
        organism) which can reproduce itself and simulate a Turing machine. Von
        Neumann was thinking about an engineering solution which would use
        electromagnetic components floating randomly in liquid or gas. This
        turned out not to be realistic with the technology available at the
        time. Stanislaw Ulam invented cellular automata, which were intended to
        simulate von Neumann's theoretical electromagnetic constructions. Ulam
        discussed using computers to simulate his cellular automata in a
        two-dimensional lattice in several papers. In parallel, von Neumann
        attempted to construct Ulam's cellular automaton. Although successful,
        he was busy with other projects and left some details unfinished. His
        construction was complicated because it tried to simulate his own
        engineering design. Over time, simpler life constructions were provided
        by other researchers, and published in papers and books.
      </Body>
      <P5Div id="container-gol">
        <P5Subtitle>Game of Life</P5Subtitle>
      </P5Div>

      <Body>
        Motivated by questions in mathematical logic and in part by work on
        simulation games by Ulam, among others, John Conway began doing
        experiments in 1968 with a variety of different two-dimensional cellular
        automaton rules. Conway's initial goal was to define an interesting and
        unpredictable cell automaton. For example, he wanted some configurations
        to last for a long time before dying and other configurations to go on
        forever without allowing cycles. It was a significant challenge and an
        open problem for years before experts on cellular automata managed to
        prove that, indeed, the Game of Life admitted of a configuration which
        was alive in the sense of satisfying Von Neumann's two general
        requirements. While the definitions before the Game of Life were
        proof-oriented, Conway's construction aimed at simplicity without a
        priori providing proof the automaton was alive.
      </Body>
    </TextContainer>
  )
}

export default Emergence
