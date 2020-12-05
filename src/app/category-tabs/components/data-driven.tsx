import React, { useEffect } from 'react'
import p5 from 'p5'
import {
  TextContainer,
  Body,
  Title,
  Subtitle,
  Img,
  P5Div,
  P5Subtitle,
} from './text-components'
import { IssSketch } from '../../sketches'

const DataDriven: React.FC = () => {
  useEffect(() => {
    new p5(IssSketch)
  }, [])
  return (
    <TextContainer>
      <Title>Data-driven generative art</Title>
      <Subtitle>
        Using modern technology and data from wearable tech to create emergence
      </Subtitle>
      <Body>
        Using data inputs from nature and physical activities such as walking,
        cycling, swimming etc, opens up lots of opportunities for creating,
        re-inventing and modernising generative art and emergence. With
        smartphones and fitness trackers capturing so much data, this is
        becoming easier and affordable for artists. For example, data from
        cycling has been used (O'Neill, Shaleph J. , 2018) to create generative
        / emergent patterns and the fact that the pattern relates to the length
        of journey, heart rate, altitude, speed etc (taken from GPS) the
        patterns arguably have agency and can be considered as art. O’Neill
        explains that “the resultant visualization should not only clearly
        represent [the] data but it should also begin to establish colour
        patterns for the kinds of experiences that cycling involves”. Also, the
        exact same journey carried out by the exact same person, but on a
        different day, produces a different pattern (maybe due to different
        weather conditions, fitness levels, traffic, time of day, state of mind
        etc), making it truly generative and thought provoking. In the article
        (cited below), O’Neil explains that Perlin noise and randomness were
        used to simulate the cycling data in the prototypes, acknowledging their
        usefulness and place in generative art.
      </Body>
      <Subtitle>Using acceleration to create generative patterns</Subtitle>
      <Body>
        Picking up on the theme of cycling, I have used data from a bicycle
        wheel in my own project, to create generative patterns from the
        acceleration of the wheel. The acceleration was measured by fixing an
        iphone within the spokes of the wheel and the acceleration values were
        sent to the computer via the OSC protocol. In this case, the wheel was
        fixed in a stand and rotated forwards and backwards by the artist /
        performer (VJ style) to create the patterns. A video of this is here
        (see minute 0:28 to 0:57)
      </Body>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <iframe
          title="Chris-bike"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-zUvJAdTSTI?start=130"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <Body>
        I believe this could be considered generative or has the potential to
        further develop as a generative art piece. For example, I (as the
        programmer / artist) didn’t predict that the patterns would look how
        they did prior to coding them. The fact they resembled glass blowing was
        a pleasant surprise (an example of serendipity). If the wheel could be
        turned by the wind or by something other than the performer then perhaps
        this would be a better example of generative art as there would be more
        autonomy and less human control. Maybe an element of randomness in the
        code could also be introduced (colour, for example).
      </Body>
      <Body>
        To illustrate and replicate some of the emerging patterns from the bike
        wheel project, consider the P5.js sketch below. In this sketch, patterns
        emerge from the audio (rather than acceleration) and user interactions
        (mouse movements). Different patterns will emerge depending on the audio
        and the user involved. But, looking back at the categorisations of
        emergence, can this be considered an example of generative art
        emergence? There is certainly a degree of autonomy and, at first, there
        may be a sense of mystery, surprise and wonder. But, arguably, that
        quickly wears off as it becomes evident to the observer how the system
        works. This leads us into an interesting discussion on the lifespan of
        generative art and emergence, which is discussed further below.
      </Body>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <iframe
          style={{ height: 800, width: 400 }}
          title="chris-p5"
          src="https://editor.p5js.org/chrisnewth/embed/8360go-Mh"
        ></iframe>
      </div>
      <Subtitle>Lifespan of Generative Art</Subtitle>
      <Body>
        To consider this, we can perhaps look at how other modern artworks can
        be enduring. In Sonic Placemaking (Lacey, 2016), the article looks at
        successful, enduring sound art installations that are embraced and
        valued by visitors. The research showed that “each of the creators
        exhibited deep relationships with their chosen sites of intervention”
        and that “the creators are able to augment a pre-existing ‘spirit of
        place’, which informs the ‘life’ of the installation”. So, maybe an
        enduring generative artwork also needs to establish a connection and
        resonance with its surroundings and it’s audience rather than just
        creating a sense of mystery, surprise, wonder etc (as previously alluded
        to and defined). And, maybe where the artwork sits, within us and within
        our world / environment, can make it enduring and relevant. This is
        perhaps why the flocking algorithms and patterns still work - As we, as
        humans, as part of nature and it’s ecosystem, have a primal connection
        to birds, fish and continue to be amazed by, and immersed in, the
        natural world. We want to understand it, be part of it and simulate it.
        The article also discusses how an elemental approach (using wind, water,
        air, etc) to a sound installation can make it successful and enduring,
        linking in with our theme of using nature (and inspirations from nature)
        to create worthy, interesting and enduring generative art.
      </Body>
      <Body>
        In an attempt to create an example of generative art that situates and
        figures itself in our world / environment, I have created a p5.js sketch
        (below) that uses the position of the International Space station to
        control colours and lines. The fact that we, as humans, are fascinated
        by space and space travel, potentially makes this sketch more wondrous
        and magical and therefore more enduring. The patterns could have easily
        been produced using mouse positions, but the fact the data is coming
        live from the ISS arguably adds agency and gives the installation life /
        meaning. Whilst this is a very basic example of generative art, it
        serves as a useful reminder of how we can use external data and APIs.
        Maybe it’s also an example of ‘the stack’ mentioned in the Week 8
        Goldsmiths lecture (Benjamin Bratton) and planetary scale computing,
        where we can get data beyond our geographical boundaries; in this case
        reaching into space to get it (via an API of course).
      </Body>
      <P5Div canvasId="container-iss" />
    </TextContainer>
  )
}

export default DataDriven
