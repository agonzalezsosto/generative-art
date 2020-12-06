import React, { useEffect } from 'react'
import p5 from 'p5'
import { IssSketch } from '../../../sketches'
import { Body, Subtitle, P5Div } from '../text-components'

const Apis: React.FC = () => {
  useEffect(() => {
    new p5(IssSketch)
  }, [])
  return (
    <div>
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
    </div>
  )
}

export default Apis
