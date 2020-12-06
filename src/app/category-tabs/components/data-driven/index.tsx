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
} from '../text-components'
import { IssSketch } from '../../../sketches'

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
        cycling has been used{' '}
        <a
          href="https://www.tandfonline.com/doi/full/10.1080/14626268.2018.1516676"
          target="_blank"
          rel="noreferrer"
        >
          (O'Neill, Shaleph J., "Making Art from Self-tracking Cycling Data.",
          2018){' '}
        </a>
        to create generative / emergent patterns and the fact that the pattern
        relates to the length of journey, heart rate, altitude, speed etc (taken
        from GPS) the patterns arguably have agency and can be considered as
        art. O’Neill explains that “the resultant visualization should not only
        clearly represent [the] data but it should also begin to establish
        colour patterns for the kinds of experiences that cycling involves”.
        Also, the exact same journey carried out by the exact same person, but
        on a different day, produces a different pattern (maybe due to different
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
          src="https://www.youtube.com/embed/-zUvJAdTSTI?start=28"
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
        wheel project, consider the P5.js sketch below. In this sketch,
        variations in the patterns are generated from perlin noise (rather than
        acceleration) and user interactions (mouse movements). Different
        patterns will emerge depending on the noise value / profile and the
        interactions. Rather than resembling glass blowing patterns (as with the
        bike wheel project above), the patterns that emerge remind me of snake
        skins, ropes, mermaid tails and sequins - Once again, the patterns were
        somewhat of a pleasant surprise, as I hadn’t planned or envisaged them
        to be rope-like, snake like etc. But, looking back at the
        categorisations of emergence, can this be considered an example of
        generative art emergence? There is certainly a degree of autonomy and,
        at first, there may be a sense of mystery, surprise and wonder. But,
        arguably, that quickly wears off as it becomes evident to the observer
        how the system works and behaves. This leads us into an interesting
        discussion on the lifespan of generative art and emergence, which is
        discussed in the conclusion tab of this website.
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
          src="https://editor.p5js.org/chrisnewth/embed/swkreTu7d"
        ></iframe>
      </div>
      <Subtitle>Working with APIs</Subtitle>
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
        Goldsmiths lecture{' '}
        <a
          href="https://www-jstor-org.gold.idm.oclc.org/stable/43631624?seq=1#metadata_info_tab_contents"
          target="_blank"
          rel="noreferrer"
        >
          (Benjamin Bratton, The Stack, 2015)
        </a>{' '}
        and planetary scale computing, where we can get data beyond our
        geographical boundaries; in this case reaching into space to get it (via
        an API of course).
      </Body>
      <P5Div
        canvasId="container-iss"
        subtitle="Pattern produced from ISS position (line length and shade controlled by latitude and longitude."
      />
      <Subtitle> Summary and further thoughts</Subtitle>
      <Body>
        In this subsection, we have considered a definition (and criteria) for
        emergence and generative art and have looked at some examples and
        effects. As society gets familiar with computational art, the surprise
        factor of generative art may be short lived or difficult to achieve
        through traditional methods , so fresh, innovative ways of producing it
        are necessary, harnessing latest technologies such as AI and wearable
        tech. It should be remembered and acknowledged that generative art is a
        partnership and collaboration between human, machine and nature (if data
        sets from natural sources are used). Therefore, generative art is
        possibly an example where human, machine and nature can be seen as
        equals. Consequently, there are interesting links with natureculture and
        feminist technoscience to explore, exploit and research.
      </Body>
    </TextContainer>
  )
}

export default DataDriven
