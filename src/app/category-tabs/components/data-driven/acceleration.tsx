import React from 'react'
import { Body, Subtitle } from '../text-components'

const Acceleration: React.FC = () => {
  return (
    <div>
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
    </div>
  )
}

export default Acceleration
