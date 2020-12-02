import styled from 'styled-components'
import React from 'react'

export const TextContainer = styled.div`
  font-family: Source Sans Pro;
  padding-left: 20px;
  padding-right: 20px;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 35px;
`

export const Subtitle = styled.div`
  font-weight: normal;
  font-size: 25px;
  font-style: italic;
`

export const Body = styled.div`
  font-weight: normal;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10%;
  padding-left: 10%;
`

const P5 = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex-direction: column-reverse;
`

export const P5Subtitle = styled.div`
  font-weight: normal;
  font-size: 10;
  font-style: italic;
  padding-top: 10px;
`

export const P5Div: React.FC<{ canvasId: string; subtitle?: string }> = ({
  canvasId,
  subtitle,
}) => {
  return (
    <ImgContainer>
      <P5 id={canvasId} />
      <div>{subtitle}</div>
    </ImgContainer>
  )
}

export const P5ControlsDiv = styled.div`
  padding: 10px;
`
export const Tab = styled.div<{ isActive: boolean }>`
  &:hover {
    cursor: pointer;
  }
  padding-left: 10px;
  padding-right: 10px;
 font-weight ${(props) => (props.isActive ? 'bold' : 'normal')};
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: Source Sans Pro;
  font-weight: normal;
  font-size: 10;
  font-style: italic;
  padding-top: 10px;
`

export const Img: React.FC<{
  link: string
  alt: string
  width: string
  subtitle?: string
}> = ({ link, alt, width, subtitle }) => {
  return (
    <ImgContainer>
      <img src={link} alt={alt} width={width} />
      <div>{subtitle}</div>
    </ImgContainer>
  )
}
