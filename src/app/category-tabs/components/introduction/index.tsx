import React, { useEffect, useRef } from 'react'
import { TextContainer, Title, Subtitle, Tab, P5Div } from '../text-components'
import p5 from 'p5'
import { LSystem } from '../../../sketches'
import Concept from './concept'
import Why from './why'
import How from './how'

const subtitles = ['Concept', 'Why a website?', 'How does this work?']

const Introduction: React.FC = () => {
  const canvas = useRef<HTMLElement>()
  const sketch = useRef<p5>()

  useEffect(() => {
    sketch.current = new p5(LSystem, canvas.current)
  }, [])

  const [currentTab, setCurrentTab] = React.useState<number>(0)

  let bod
  switch (currentTab) {
    case 0:
      bod = <Concept />
      break
    case 1:
      bod = <Why />
      break
    case 2:
      bod = <How />
      break
    default:
      break
  }

  return (
    <TextContainer>
      <Title>Introduction</Title>
      <Subtitle>Hello, generative art!</Subtitle>
      <P5Div id="container-brush" />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {subtitles.map((item, index) => (
          <Tab
            isActive={index === currentTab}
            onClick={() => setCurrentTab(index)}
          >
            {item}
          </Tab>
        ))}
      </div>
      {bod}
    </TextContainer>
  )
}

export default Introduction
