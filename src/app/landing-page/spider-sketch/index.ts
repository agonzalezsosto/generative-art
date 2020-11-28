import p5 from 'p5'
import Origin from './origin'
import Lines from './lines'

type OriginType = {
  moveOrigin: () => void
  checkBorders: () => void
  origin: p5.Vector
}

type LinesType = {
  drawLine: (val: p5.Vector) => void
  checkEdges: () => void
}

const SpiderSketch = (p: p5) => {
  let origins: Array<OriginType> = []
  let lines: Array<LinesType> = []

  p.setup = () => {
    p.createCanvas(p.displayWidth, p.displayHeight)
    p.strokeWeight(0.6)

    for (let i = 0; i < 100; i++) {
      origins.push(Origin(p))
    }

    for (let i = 0; i < 50; i++) {
      lines.push(Lines(p))
    }
  }

  p.draw = () => {
    p.background(255)

    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < origins.length; j++) {
        lines[i].drawLine(origins[j].origin)
      }
      lines[i].checkEdges()
    }

    for (let j = 0; j < origins.length; j++) {
      origins[j].moveOrigin()
      origins[j].checkBorders()
    }
  }
}

export default SpiderSketch
