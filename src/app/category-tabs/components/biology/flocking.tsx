import React, { useEffect } from 'react'
import p5 from 'p5'
import {
  FlockingSketch,
  updateMaxForce,
  updateMaxSpeed,
  updatePerceptionRadius,
} from '../../../sketches'
import {
  P5Div,
  Body,
  Subtitle,
  P5Subtitle,
} from '../../components/text-components'

const Flocking: React.FC = () => {
  useEffect(() => {
    new p5(FlockingSketch)
  })

  const changeMaxForce = (val: { target: { value: any } }) => {
    updateMaxForce(val.target.value)
  }

  const changeMaxSpeed = (val: { target: { value: any } }) => {
    updateMaxSpeed(val.target.value)
  }

  const changePerceptionRadius = (val: { target: { value: any } }) => {
    updatePerceptionRadius(val.target.value)
  }

  return (
    <div>
      <Body>
        In the late 1980’s, Craig Reynolds developed what is now commonly known
        as the flocking algorithm. I believe that this is a very interesting
        example of a system that models collective behavior, and as such, it
        invites the analysis of interactions of individual units within systems.
      </Body>
      <Body>
        Reynolds describes the basic principles of the flocking algorithm as
        being separation (birds aiming to separate from each other to prevent
        collision), cohesion (birds aiming to flying together), and alignment
        (making sure birds fly in the same direction). These simple ideas of how
        birds behave seem to have interesting parallels with how many other
        systems work, and can plant interesting seeds in thinking about other
        systems of collective behavior.
      </Body>
      <Body>
        However, this also makes strong allusions to concepts of emergence. As
        explored in previous sections, emergence deals with the notion of
        complex patterns “emerging” from the collective behavior of many small
        units with basic principles.
      </Body>
      <Body>
        Personally, the reason why I find this to be so intriguing is that
        emergence is a guiding principle to everything in life. For example, DNA
        simply contains genetic instructions on how a given cell should
        reproduce - it does not contain instructions for any more or any less
        than that. However, they form a basic component that forms cells, which
        forms tissues, then organs, and finally a body. The complex idea of what
        a human body and mind are could be understood as being emergent
        phenomena - complex constructions that are built not out of a
        predetermined willed creation, but rather as out of the summation of
        layers of emergent behaviors born out of simple systems.
      </Body>
      <Body>
        The complexity of emergence is aimed to be explored in this section by
        allowing users to control parameters that affect the behavior of
        flocking systems - these being the level of separation, cohesion, and
        alignment. It is intended that by modifying these simple parameters, the
        power that simple elements can have in emergent systems will be
        revealed.
      </Body>
      <Body>
        The sketch also features additional properties. The aesthetic component
        has been further developed by including variations on the colors of the
        circles (each circle representing a bird), and lines that are drawn
        depending on the distance between birds, which highlight the forming of
        different clusters.
      </Body>
      <P5Div
        canvasId="container-flocking"
        subtitle="Fig 1. Flocking. Clicking the mouse resets positions"
      />
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          justifyItems: 'center',
          alignItems: 'center',
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            paddingLeft: 30,
            paddingRight: 30,
            textAlign: 'center',
          }}
        >
          <input
            type="range"
            min="1"
            max="100"
            id="myRange"
            onChange={changeMaxForce}
          />
          <P5Subtitle>Change Max force</P5Subtitle>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            paddingLeft: 30,
            paddingRight: 30,
            textAlign: 'center',
          }}
        >
          <input
            type="range"
            min="1"
            max="100"
            id="myRange"
            onChange={changeMaxSpeed}
          />
          <P5Subtitle>Change Max speed</P5Subtitle>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            paddingLeft: 30,
            paddingRight: 30,
            textAlign: 'center',
          }}
        >
          <input
            type="range"
            min="1"
            max="100"
            id="myRange"
            onChange={changePerceptionRadius}
          />
          <P5Subtitle>Change perception radius</P5Subtitle>
        </div>
      </div>
    </div>
  )
}

export default Flocking
