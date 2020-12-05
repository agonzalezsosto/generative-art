import React, { useState } from 'react'
import styled from 'styled-components'
import Introduction from './components/introduction'
import Randomness from './components/randomness'
import DataDriven from './components/data-driven'
import History from './components/history'
import Emergence from './components/emergence'
import Conclusion from './components/conclusion'
import Biology from './components/biology'

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const TopBar = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100px;
  font-family: Source Sans Pro;
  justify-content: center;
`

const Title = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  font-weight: bold;
`

const TabButton = styled.div<{ isActive: boolean }>`
  display: flex;
  flex: 1;
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
 font-weight ${(props) => (props.isActive ? 'bold' : 'normal')};
`

const menuItems = [
  'Introduction',
  'History',
  'Randomness',
  'Data-Driven',
  'Emergence',
  'Biological Systems',
  'Conclusion',
]

const CategoryTabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0)

  let currentComponent

  switch (currentTab) {
    case 0:
      currentComponent = <Introduction />
      break
    case 1:
      currentComponent = <History />
      break
    case 2:
      currentComponent = <Randomness />
      break
    case 3:
      currentComponent = <DataDriven />
      break
    case 4:
      currentComponent = <Emergence />
      break
    case 5:
      currentComponent = <Biology />
      break
    case 6:
      currentComponent = <Conclusion />
      break
    default:
      currentComponent = <div>Hello!</div>
      break
  }

  return (
    <ContainerBox>
      <ContainerBox>
        <TopBar>
          <Title>Generative Art</Title>
          {menuItems.map((item, index) => (
            <div>
              <TabButton
                isActive={currentTab === index}
                onClick={() => {
                  setCurrentTab(index)
                }}
              >
                {item}
              </TabButton>
            </div>
          ))}
        </TopBar>
      </ContainerBox>
      <ContainerBox>{currentComponent}</ContainerBox>
    </ContainerBox>
  )
}

export default CategoryTabs
