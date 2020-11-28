import React, { useState, useEffect, useRef } from 'react'
import p5 from 'p5'
import styled from 'styled-components'

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

const Container: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const canvas = useRef<HTMLElement>()

  const Sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(400, 400)
    }

    p.draw = () => {
      p.background(0)
      p.circle(p.width / 4, p.height / 2, 50)
    }
  }

  useEffect(() => {
    new p5(Sketch, canvas.current)
  })

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
      )
      <ContainerBox>
        <div ref={() => canvas}></div>
      </ContainerBox>
    </ContainerBox>
  )
}

export default Container
