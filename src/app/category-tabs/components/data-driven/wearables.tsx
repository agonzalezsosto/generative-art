import React from 'react'
import { Body, Subtitle } from '../text-components'

const Wearables: React.FC = () => {
  return (
    <div>
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
    </div>
  )
}

export default Wearables
