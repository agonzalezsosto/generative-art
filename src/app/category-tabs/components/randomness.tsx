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
import { LetterBombSketch, HyperbolicSketch } from '../../sketches'

const Randomness: React.FC = () => {
  useEffect(() => {
    new p5(LetterBombSketch)
    new p5(HyperbolicSketch)
  }, [])
  return (
    <TextContainer>
      <Title>Randomness</Title>
      <Subtitle>
        Some simple ways of creating surprise, wonder, mystery and autonomy
      </Subtitle>
      <Body>
        One simple, yet effective, way of creating autonomy and surprise is by
        use of the random() function.{' '}
      </Body>
      <Body>
        For example, in the p5.js sketch below (made for a Goldsmiths homework
        activity) the words fall from random positions and are picked randomly
        from an array. The message is part of a 1945 wartime propaganda message
        (leaflet drops onto Nagasaki, Japan). Whilst this may not have
        generative patterns, the words order themselves into random, generative
        sequences and the impact can be quite powerful, potentially giving a
        sense of surprise or discomfort that is a requirement of generative art
        (as defined in the ‘Emergence’ section).
      </Body>
      <P5Div
        canvasId="container-letterbomb"
        subtitle="Fig. 1 - Word Letterbomb. Chris Newth"
      />
      <Body>Example 2:</Body>
      <Body>
        By using a hyperbolic pseudorandom number generator, you can achieve
        randomness that is more natural. Here's some processing code for a
        hyperbolic pseudorandom number generator (Taken from Goldsmiths module
        'Processing for Artists and Designers, Week 5, Tim Blackwell).
      </Body>
      <Body>
        float minRadius = 1.0; float alpha = 2.0; float rand = minRadius * pow(1
        - random(1), -1.0 / alpha);`
      </Body>
      <Body>
        And here's an example of using this code to create a natural spread of
        randomly shaped ellipses. As you can see, most are small but
        occasionally larger ellipses are produced, creating a more natural
        spread of sizes with a few (larger) outliers.
      </Body>
      <P5Div
        canvasId="container-hyperbolic"
        subtitle="Fig. 2 - Hyperbolic Circles. Chris Newth"
      />
    </TextContainer>
  )
}

export default Randomness
