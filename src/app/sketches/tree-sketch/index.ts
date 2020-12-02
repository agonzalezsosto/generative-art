import p5 from 'p5'

let angle = 1
let length = 80
let dimA = 0.4
let dimB = 0.7
let minLength = 2

export const TreeSketch = (p: p5) => {
  let centerX: number
  let centerY: number

  p.setup = () => {
    const canvas = p.createCanvas(500, 500)
    canvas.parent('container-tree')
    centerX = p.width / 2
    centerY = p.height / 2
  }

  p.draw = () => {
    p.background(0)
    angle += 0.01
    p.push()
    p.translate(centerX, centerY)
    branch(length)
    p.rotate(p.radians(180))
    branch(length)
    p.pop()
  }

  const branch = (len: number) => {
    p.stroke(255, (len / length) * 255)
    p.line(0, 0, 0, -len)

    if (len > minLength) {
      p.push()
      p.translate(0, -len)
      p.rotate(angle)
      branch(len * dimA)
      p.pop()
      p.push()
      p.translate(0, -len)
      p.rotate(-angle)
      branch(len * dimB)
      p.pop()
    }
  }
}

export const updateDimA = (number: number) => {
  dimA = p5.prototype.map(number, 0, 100, 0, 0.7)
}

export const updateDimB = (number: number) => {
  dimB = p5.prototype.map(number, 0, 100, 0, 0.7)
}
