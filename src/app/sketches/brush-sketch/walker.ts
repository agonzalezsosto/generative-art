import p5 from 'p5'

const Walker = (p: p5, xDim: number, yDim: number) => {
  let position = p.createVector()
  let acceleration = p.createVector()
  let velocity = p.createVector()
  let inc = 0
  let particleSize = 1
  let particleRange = 4
  let masterAlpha = 1

  const draw = (force: number[][]) => {
    const currentForce =
      force[p.int(position.x) / xDim][p.int(position.y) / yDim] * 10
    acceleration = p5.Vector.fromAngle(currentForce)
    velocity.add(acceleration)
    velocity.setMag(4)
    position.add(velocity)
    p.fill(255, 50)
    checkEdges()
    drawBrush(position.x, position.y)
  }

  const drawBrush = (x: number, y: number) => {
    inc = inc + 0.01
    particleRange = p.map(p.noise(inc), 0, 1, 4, 10)
    particleSize = p.map(p.noise(inc + 10), 0, 1, 1, 6)
    masterAlpha = p.map(p.noise(inc + 20), 0, 1, 0, 255)

    p.fill(255, masterAlpha)
    for (let i = 0; i < 10; i++) {
      const randomOffsetX = p.random(particleRange)
      const randomOffsetY = p.random(particleRange)
      p.circle(x + randomOffsetX, y + randomOffsetY, particleSize)
    }
  }

  const getPosition = () => {
    return position
  }

  const checkEdges = () => {
    if (position.x < 0) {
      position.x = p.width
    }

    if (position.x > p.width) {
      position.x = 0
    }

    if (position.y < 0) {
      position.y = p.height
    }

    if (position.y > p.height) {
      position.y = 0
    }
  }

  return { draw, getPosition }
}

export default Walker
