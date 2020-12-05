import React from 'react'
import { TextContainer, Title, Tab } from '../text-components'
import Introduction from './introduction'
import Recursion from './recursion'
import Flocking from './flocking'
import Conclusion from './conclusion'

const subtitles = ['Introduction', 'Recursion', 'Flocking', 'Conclusion']

const Biology: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState<number>(0)

  let bod
  switch (currentTab) {
    case 0:
      bod = <Introduction />
      break
    case 1:
      bod = <Recursion />
      break
    case 2:
      bod = <Flocking />
      break
    case 3:
      bod = <Conclusion />
      break
    default:
      break
  }

  return (
    <TextContainer>
      <Title>Biological Systems</Title>
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

export default Biology
