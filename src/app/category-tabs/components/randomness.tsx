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
        use of the random( ) function. It should be noted that random number
        generators are not truly random as the numbers can be determined if you
        have knowledge of the algorithm. For this reason, they are known as
        pseudorandom number generators. If truly random numbers are required for
        a generative art project, it is possible to get them from a quantum
        machine like this:{' '}
        <a href="https://qrng.anu.edu.au/" target="_blank" rel="noreferrer">
          https://qrng.anu.edu.au/
        </a>{' '}
        using an HTTP GET based API. Further details on how to do this are here:
        <a
          href="https://qrng.anu.edu.au/contact/faq/"
          target="_blank"
          rel="noreferrer"
        >
          https://qrng.anu.edu.au/contact/faq/
        </a>
        .{' '}
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
      <Body>
        Writing this sketch spurred me on to do some further research into
        generative narratives and I recommend this article for anyone else
        interested in this - Vladimir Todorovic; Dejan Grba, Wandering Machines:
        Narrativity in Generative Art, 2019. Something that caught my eye in the
        article was reference to a film called ‘Sunspring’ which used machine
        learning and AI to produce a (generative) screenplay and narrative. In a
        review, the film was described as ‘hilarious and intense’ and intensity
        is something I was hoping to capture in the ‘letterbombs’ sketch below.
        It also prompted me to consider machine learning in future generative
        art projects.
      </Body>
      <P5Div
        canvasId="container-letterbomb"
        subtitle="Fig. 1 - Word Letterbomb. Chris Newth"
      />
      <Body>Example 2:</Body>
      <Body>
        By using a hyperbolic pseudorandom number generator, you can achieve
        randomness that is more natural. ‘Hyperbole’ means exaggerated and
        hyperbolic randomness gives some results (numbers) that are exaggerated
        (much larger / smaller) compared with the majority. For example, if we
        are creating ellipses, then a few will be really large compared to the
        majority. This can create interesting, asymmetric patterns and
        compositions. Also, it could be argued that the patterns reflect nature
        where most species are of a similar size and shape, but with some
        interesting and wondrous exceptions. I believe this sense of wonder, and
        harmony with nature, can make some interesting generative art. Here's
        some processing code for a hyperbolic pseudorandom number generator
        (Taken from Goldsmiths module 'Processing for Artists and Designers,
        Week 5, Tim Blackwell).
      </Body>
      <Body>
        float minRadius = 1.0; float alpha = 2.0; float rand = minRadius * pow(1
        - random(1), -1.0 / alpha);`
      </Body>
      <Body>
        And here's an example of using this code to create a natural spread of
        randomly shaped ellipses. As you can see, most are small and of a
        similar colour, but occasionally larger ellipses are produced with
        different shades, creating a more natural spread of sizes / colour with
        a few (larger) outliers. Click the image to generate new patterns and
        colours (red, green and blue).
      </Body>
      <P5Div
        canvasId="container-hyperbolic"
        subtitle="Fig. 2 - Hyperbolic Circles. Chris Newth"
      />
    </TextContainer>
  )
}

export default Randomness
