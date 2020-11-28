import React, { useState } from 'react'
import styled from 'styled-components'
import Introduction from './components/introduction'
import History from './components/history'
import Frankenstein from './components/frankenstein'
import Biology from './components/biology'
import Conclusion from './components/conclusion'

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
  'Frankenstein Effect',
  'Biology',
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
      currentComponent = <Frankenstein />
      break
    case 3:
      currentComponent = <Biology />
      break
    case 4:
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
