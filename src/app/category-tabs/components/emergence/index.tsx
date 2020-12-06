import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import GolSketch from '../../../sketches/gol-sketch'
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
      <Subtitle>Categorising and defining emergence</Subtitle>
      <Body>
        Generative art is an example of emergence, so this is a good starting
        point for categorising it. In a Leonardo article,{' '}
        <a
          href="https://www-jstor-org.gold.idm.oclc.org/stable/40540082?seq=1#metadata_info_tab_contents"
          target="_blank"
          rel="noreferrer"
        >
          (Gordon Monro, Emergence and Generative Art, 2009)
        </a>
        we learn about categories such as Subjective Emergence and Objective
        Emergence and Frankenstein Emergence (more on that later). The article
        was written in 2009, but the categories seem logical and, at least to
        me, relevant today.
      </Body>
      <Body>
        In the definition of Subjective Emergence there is reference to
        'surprise' i.e. something unexpected and surprising has emerged. The
        need for 'surprise' is later on included as a desirable outcome for
        generative art.
      </Body>
      <Body>
        In the definition of Objective Emergence the author cites the difficulty
        of predicting the outcome / emergence and how simple rules can lead to
        complex behaviour. This implies a sense of mystery. The need for
        'mystery' is later on included as another desirable for generative art.
      </Body>
      <P5Div
        canvasId="container-gol"
        subtitle="Conway's Game of Life - a classic example of emergence"
      ></P5Div>
      <Body>
        The author goes on to propose his definition for Generative Art
        Emergence, which is that it should evoke feelings of surprise, wonder
        and mystery and that there should be some form of autonomy, where the
        system (or art) takes on a life of its own. For example, even if we have
        knowledge of the system, there still needs to be a sense of surprise,
        mystery and wonder in what it produces (or how it produces that). The
        article points out though, that the element of surprise might wear off
        over time as we become familiar with things like fractal art and
        flocking algorithms. At one point, early on in their development, such
        art pieces evoked feelings of surprise, wonder and mystery but maybe
        they now need to be re-imagined, repurposed and re-invented to maintain
        it. So this brings up an interesting point - That generative art
        potentially has a shelf life and needs to be re-generated. 'Regenerated
        generative art', if you like.
      </Body>
    </TextContainer>
  )
}

export default Emergence
