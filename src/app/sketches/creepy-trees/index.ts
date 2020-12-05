import p5 from 'p5'

const CreepyTrees = (p: p5) => {
  p.setup = () => {
    const cnv = p.createCanvas(600, 400)
    cnv.parent('container-creepy')
    p.stroke(255)
    p.strokeWeight(3)
  }

  p.draw = () => {
    p.background(0)
    p.translate(p.width / 2, p.height)
    branch(200, -p.PI, 10, 255, 10)
  }

  const branch = (
    len: number,
    ang: number,
    seed: number,
    alpha: number,
    minLength: number
  ) => {
    if (len < minLength) return

    const newLen =
      len * p.map(p.noise(p.frameCount / 300 + seed), 0, 1, 0.4, 0.85)
    const newAng =
      ang * p.map(p.noise(p.frameCount / 320 + seed), 0, 1, 0.3, 0.9)

    p.push()
    p.rotate(ang)
    p.stroke((len / 40) * 255, alpha)
    p.strokeWeight(len / 10)
    p.line(0, 0, 0, newLen)
    p.translate(0, newLen)

    branch(
      newLen,
      newAng * p.noise(p.frameCount / 500 + seed),
      seed,
      alpha,
      minLength
    )
    branch(
      newLen,
      -newAng * p.map(p.noise(p.frameCount / 500 + 10 + seed), 0, 1, 1, 3),
      seed,
      alpha,
      minLength
    )
    p.pop()
  }
}

export default CreepyTrees
