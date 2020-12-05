import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import { GenerativeBrush } from '../../sketches'
import {
  TextContainer,
  Body,
  Title,
  Subtitle,
  Img,
  P5Div,
  P5Subtitle,
} from './text-components'

const History: React.FC = () => {
  const canvas = useRef<HTMLElement>()
  const sketch = useRef<p5>()

  useEffect(() => {
    sketch.current = new p5(GenerativeBrush, canvas.current)
  }, [])
  return (
    <TextContainer>
      <Title>History</Title>
      <Subtitle>Generative art vs computational art</Subtitle>
      <Body>
        <em>
          Generative art refers to any art practice in which the artist uses a
          system, such as a set of natural language rules, a computer program, a
          machine, or other procedural invention, that is set into motion with
          some degree of autonomy, thereby contributing to or resulting in a
          completed work of art.{' '}
        </em>
        <a
          href="http://www.philipgalanter.com/downloads/ga2003_paper.pdf"
          target="_blank"
          rel="noreferrer"
        >
          (Philip Galanter, ‘What is Generative Art? Complexity Theory as a
          Context for Art Theory’, 2003).
        </a>
      </Body>
      <Body>
        Generative art consists of the use of an external system/method, where
        the artist doesn’t have total control of. This definition by Galanter
        states that generative art is not necessarily under the computational
        art category.
      </Body>
      <Body>
        When Jackson Pollock created his first ‘Action Painting’ in 1948, he
        used his body and brush to drip and splash oil paint on the canvas, in
        order to simulate randomness with the use of unsystematic repetition or
        ‘intentional accidents’. This is an example of an early use of a
        generative method, to find a way to create more organic patterns with a
        process that is not entirely under the artist’s control, allowing the
        final artwork to be more conceptually and visually natural.{' '}
        <em>
          The myriad of painterly lines and spots in the drip paintings is thus
          of a complex geometrical character, similar to nature. (...) Pollock's
          fractalness is the complexity found in nature.{' '}
        </em>
        <a
          href="https://dspace.mit.edu/handle/1721.1/35124"
          target="_blank"
          rel="noreferrer"
        >
          (Kenny Verbeeck, ‘Randomness as a Generative Principle in Art and
          Architecture’, 2006).
        </a>
      </Body>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        <Img
          link="http://www.leonelmoura.com/wp-content/uploads/2019/01/bebot_astana.jpg"
          alt="Leonel Moura"
          width="500px"
          subtitle="Fig. 1: Bebot, Leonel Moura. 2017."
        />
        <Img
          link="https://hyperallergic.com/wp-content/uploads/2015/12/One-Number-31-1950.jpg"
          alt="Pollock"
          width="500px"
          subtitle="Fig. 2: Number 1A, Jackson Pollock. 1948."
        />
      </div>
      <Body>
        Although the exploration of these methods started almost 100 years ago,
        it still remains incredibly significant (see figure 1). Leonel Moura is
        a computational artist who is also interested in creating generative
        art. He explores the same idea of random repetition with the creation of
        his own tools - small wheeled robots that draw on the surface with
        marker pens based on the rules of his algorithm - in order to produce a
        generative artwork.
      </Body>
      <Body>
        This is an example of a simple generative art program that Rita created
        on Processing. It allows you to create a generative drawing based on the
        rules (algorithm), that produces completely random and different results
        each time.
      </Body>
      <P5Div
        canvasId="container-brush"
        subtitle="Fig. 3: Generative Sketch, Rita Cabrito. 2020."
      />
      <Body>
        The performance ‘Rhythm 0’ (1974) by Marina Abramović (see figure 4) can
        also be considered generative. This performance consisted of the use of
        the audience as a generative system/ an emergence system. She placed a
        variety of objects on a table next to her: from pens to weaponry – and
        the audience had full authority to do what they pleased with these
        utensils. This is clearly not under computational art, but it is a
        generative method. It is using tools (audience and items) to create the
        performance of which the artist does not have full control of.{' '}
        <em>
          I wanted to give the audience every opportunity for pleasure, for
          pain, for tenderness and also the possibility of death; (...) I wanted
          to see what the public would do if I didn't do anything (...)
        </em>{' '}
        <a
          href="https://www.dazeddigital.com/art-photography/article/39128/1/how-to-live-according-to-artist-marina-abramovic-sean-kelly-early-works-new-york"
          target="_blank"
          rel="noreferrer"
        >
          (Marina Abramović in ‘How to Live according to Marina Abramović, Daze
          Digital, 2018)
        </a>
      </Body>
      <Img
        link="https://unbelievable-facts.com/wp-content/uploads/2017/08/Rhythm-0-by-Marina-Abramovic-7.jpg"
        alt="Pollock"
        width="500px"
        subtitle="Fig. 4: Rhythm 0, Marina Abramović. 1974."
      />
      <Body>
        The fascination for computation is perhaps the possibility to create
        experiences and interactions that would never be possible without. With
        the technological evolution and revolution, it would be bizarre not to
        take full advantage of this tool in all disciplines.
      </Body>
      <Body>
        The platform for the artwork is no longer only the canvas, the paper, or
        the physical surface, for example. It is now the internet, the drive,
        the code – This links with the introduction of mass-produced artworks by
        Andy Warhol (see figure 5), the intention behind repetition, associated
        with the mass consumption in popular culture in the late 20th century in
        America.
      </Body>
      <Img
        link="https://blogs-images.forbes.com/kristintablang/files/2015/12/Andy-Warhol-32-Soup-Cans-1200x723.jpg"
        alt="Warhol"
        width="500px"
        subtitle="Campbell’s Soup Cans, Andy Warhol, 1962."
      />
      <Body>
        What is intriguing about mass production in computational art is the
        possibility of a work that can exist simultaneously around the world in
        multiple platforms and multiple places. It can exist in a gallery, it
        can exist in your house, it can coexist everywhere if you have access to
        the code. In a way, mass production is a systematic generative process
        of repetition.
      </Body>
      <div style={{ height: 100 }} />
    </TextContainer>
  )
}

export default History
