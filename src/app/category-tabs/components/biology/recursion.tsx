import React, { useEffect } from 'react'
import p5 from 'p5'
import {
  Body,
  Subtitle,
  P5Div,
  P5ControlsDiv,
} from '../../components/text-components'
import {
  TreeSketch,
  updateDimA,
  updateDimB,
} from '../../../sketches/tree-sketch'
import { CreepyTrees } from '../../../sketches'

const Introduction: React.FC = () => {
  useEffect(() => {
    new p5(TreeSketch)
    new p5(CreepyTrees)
  })

  const changeDimA = (val: { target: { value: any } }) => {
    updateDimA(val.target.value)
  }

  const changeDimB = (val: { target: { value: any } }) => {
    updateDimB(val.target.value)
  }

  return (
    <div>
      <Body>
        Recursion is a topic that I’ve been artistically engaged with for a long
        time. As a guitarist with a passion for guitar pedals, I felt like delay
        pedals, which allow for the feedback of sounds into the circuit that
        generated them, were one of the most interesting sonic resources at my
        disposal. Delay pedals allow you to work with a limited number of
        resources, where you could have different results that are somehow still
        connected to the identity of your starting point.
      </Body>
      <Body>
        Recursion and feedback are essentially very similar ideas. Just like
        with delay pedals audio output could be fed back into the input, with
        recursive algorithms, one function can simply call itself.
      </Body>
      <Body>
        It’s very important to note that recursion is an idea that works when
        you either have an exit condition, or when you have pre-determined timed
        intervals to contain the temporal scope of its evolution. Recursion and
        feedback need to be controlled in order to prevent a system from
        collapsing onto itself.
      </Body>
      <Body>
        One of the classic examples of recursion is that of the creation of a
        tree. A tree consists of a main trunk. From this trunk, different
        branches emerge, off of which different branches emerge. It is similar
        with roots, and with veins. The whole structure is based off of a simple
        principle that is repeated until a limit is reached.
      </Body>
      <Body>
        However, something interesting is that because we have very basic
        principles creating a very large structure, it means that if we vary
        small attributes of what constitutes its form, then we will have large
        repercussions. On one hand this might be seen as a conceptually elegant
        and intellectually gratifying circumstance, where little effort yields
        great results. But it also puts us in a position where we’re operating
        on basic principles and perhaps getting a result that we didn’t
        necessarily expect but in hindsight seems nothing short of inevitable.
      </Body>
      <Body>
        This can be explored if we think of, for example, changing parameters of
        a simple tree. The following animation presents a circumstance where we
        have a tree where multiple of its properties are evolving automatically
        in an incremental way. This incremental growth allows for the cyclical
        variation of its shape, and we’re also presented with controls that
        allow for the interaction with a user.
      </Body>
      <P5Div
        canvasId="container-tree"
        subtitle="Fig 1. - Spinning Tree, Armando Gonzalez."
      >
        <P5ControlsDiv>
          <input
            type="range"
            min="1"
            max="100"
            id="myRange"
            onChange={changeDimA}
          />
          <input
            type="range"
            min="1"
            max="100"
            id="myRange"
            onChange={changeDimB}
          />
        </P5ControlsDiv>
      </P5Div>
      <Body>
        Something interesting about this idea is that despite having variation
        with the development of our trees, we still have an additive process,
        each branch has the same relation to its parent as its parent had to its
        own parent. This is obviously still fascinating but has more
        opportunities for growth.
      </Body>
      <Body>
        This next example shows a case in which a tree has variations which are
        completely unrelated from one level to the next. Something that I found
        of particular interest to this section is that I found myself
        anthropomorphizing the tree due to its motion. I wonder if believable
        anthropomorphization is to an extent related to the creation of
        recursive structures with a degree of decoupling to their parents.
      </Body>
      <P5Div canvasId="container-creepy" />
    </div>
  )
}

export default Introduction
