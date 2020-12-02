import p5 from 'p5'

const SoundSketch = (p: p5) => {
  p.setup = () => {
    const cnv = p.createCanvas(1300, 200)
    cnv.parent('container-brush')
  }

  p.draw = () => {}
}

export default SoundSketch
