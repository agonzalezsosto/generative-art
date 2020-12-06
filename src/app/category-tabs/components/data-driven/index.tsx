import React from 'react'
import { TextContainer, Title, Tab } from '../text-components'
import Wearables from './wearables'
import Acceleration from './acceleration'
import Apis from './apis'

const subtitles = ['Wearables', 'Acceleration', 'Apis']

const DataDriven: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState<number>(0)

  let bod
  switch (currentTab) {
    case 0:
      bod = <Wearables />
      break
    case 1:
      bod = <Acceleration />
      break
    case 2:
      bod = <Apis />
      break
    default:
      break
  }
  return (
    <TextContainer>
      <Title>Data-driven generative art</Title>
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

export default DataDriven
