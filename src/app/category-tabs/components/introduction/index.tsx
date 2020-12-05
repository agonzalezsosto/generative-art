import React from 'react'
import { TextContainer, Title, Subtitle, Tab } from '../text-components'
import Concept from './concept'
import Why from './why'
import How from './how'

const subtitles = ['Concept', 'Why a website?', 'How does this work?']

const Introduction: React.FC = () => {
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
      <div style={{ height: 30 }} />
    </TextContainer>
  )
}

export default Introduction
