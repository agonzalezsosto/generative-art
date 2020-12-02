import p5 from 'p5'
import Walker from './walker'

type WalkerType = {
  draw: (x: number, y: number) => void
  getPosition: () => p5.Vector
}

const BrushSketch = (p: p5) => {
  let cols, rows

  p.setup = () => {
    cols = 10
    rows = 10
  }

  p.draw = () => {}
}

export default BrushSketch
