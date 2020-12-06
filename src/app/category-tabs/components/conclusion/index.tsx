import React from 'react'
import { TextContainer, Body, Title, Tab } from '../text-components'
import ConclusionTab from './conclusion'
import Bibliography from './bibliography'

const subtitles = ['Conclusion', 'Bibliography']

const Conclusion: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState<number>(0)

  let bod
  switch (currentTab) {
    case 0:
      bod = <ConclusionTab />
      break
    case 1:
      bod = <Bibliography />
      break
    default:
      break
  }
  return (
    <TextContainer>
      <Title>Conclusion</Title>
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

export default Conclusion
