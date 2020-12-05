import p5 from 'p5'

const HyperbolicRandomness = (p: p5) => {
  let minRadius = 5.0
  let alpha = 2.0
  let alphaColour = 1.0
  let counter = -1

  let minShadeRed
  let minShadeGreen
  let minShadeBlue

  p.setup = () => {
    const cnv = p.createCanvas(600, 400)
    cnv.parent('container-hyperbolic')
    createPattern()
  }

  p.draw = () => {}

  p.mousePressed = () => {
    counter++
    p.background(255)
    createPattern()
  }

  const createPattern = () => {
    for (let i = 0; i < 200; i++) {
      const ellipseWidth = hyperbolicPseudorandom(minRadius, alpha)
      var ellipseHeight = hyperbolicPseudorandom(minRadius, alpha)
      if (counter % 3 === 0) {
        minShadeRed = p.random(20, 100)
        p.fill(hyperbolicPseudorandom(minShadeRed, alphaColour), 0, 0)
      } else if (counter % 3 === 1) {
        minShadeGreen = p.random(20, 100)
        p.fill(0, hyperbolicPseudorandom(minShadeGreen, alphaColour), 0)
      } else if (counter % 3 === 2) {
        minShadeBlue = p.random(20, 100)
        p.fill(0, 0, hyperbolicPseudorandom(minShadeBlue, alphaColour))
      }
      p.ellipse(
        p.random(0, p.width),
        p.random(0, p.height),
        ellipseWidth,
        ellipseHeight
      )
    }
  }

  const hyperbolicPseudorandom = (minRadius: number, alpha: number) => {
    return minRadius * p.pow(1 - p.random(1), -1 / alpha)
  }
}

export default HyperbolicRandomness
