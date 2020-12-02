import p5 from 'p5'

const ChrisFractal = (p: p5) => {
  const drawFour = false
  const freezeAngle = false
  let angle = 0

  p.setup = () => {
    const cnv = p.createCanvas(300, 300)
    cnv.parent('container-brush')
    p.rectMode(p.CENTER)
  }

  p.draw = () => {
    p.background(255)

    if (drawFour) {
      drawRect(p.width / 4, p.height / 4, p.width / 6.4, p.height / 5.3)
      drawRect(
        (p.width * 3) / 4,
        (p.height * 3) / 4,
        p.width / 6.4,
        p.height / 5.3
      )
      drawRect(p.width / 4, (p.height * 3) / 4, p.width / 6.4, p.height / 5.3)
      drawRect((p.width * 3) / 4, p.height / 4, p.width / 6.4, p.height / 5.3)
    } else {
      drawRect(p.width / 2, p.height / 2, p.height / 4, p.height / 5.3)
    }

    if (freezeAngle === false) {
      angle = angle + 0.01
    }
  }

  const drawRect = (
    x: number,
    y: number,
    rectLength: number,
    rectHeight: number
  ) => {
    p.push()
    p.translate(x, y)
    p.rotate(angle)
    p.stroke(0)
    p.fill(255, 0, 0, rectLength)
    const m = 18
    p.rect(0, 0, rectLength, rectHeight)
    if (rectLength > m) {
      drawRect(
        0 + rectLength * 0.75,
        0 - rectHeight * 0.75,
        rectLength / 2,
        rectHeight / 2
      )
      drawRect(
        0 - rectLength * 0.75,
        0 - rectHeight * 0.75,
        rectLength / 2,
        rectHeight / 2
      )
      drawRect(
        0 - rectLength * 0.75,
        0 + rectHeight * 0.75,
        rectLength / 2,
        rectHeight / 2
      )
      drawRect(
        0 + rectLength * 0.75,
        0 + rectHeight * 0.75,
        rectLength / 2,
        rectHeight / 2
      )
    }
    p.pop()
  }
}

export default ChrisFractal
