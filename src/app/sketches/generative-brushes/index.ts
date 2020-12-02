import p5 from 'p5'
import Brush from './brush'

type BrushType = {
  move: () => void
  display: () => void
  margins: () => void
}

const GenerativeBrush = (p: p5) => {
  let brushes: Array<BrushType> = []
  let bck = p.color('#FCFCF8')

  p.setup = () => {
    const cnv = p.createCanvas(600, 600)
    cnv.parent('container-brush')
    p.background(bck)

    for (let i = 0; i < 10; i++) {
      brushes[i] = Brush(p)
    }
  }

  p.draw = () => {
    for (let i = 0; i < 10; i++) {
      brushes[i].display()
      brushes[i].move()
      brushes[i].margins()
    }
  }
}

export default GenerativeBrush
