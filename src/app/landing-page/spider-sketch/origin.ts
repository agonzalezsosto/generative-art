import p5 from 'p5'

const Origin = (p5c: p5) => {
  const p = p5c

  let origin = p.createVector(p.random(p.width), p.random(p.height))
  let velocity = 1
  let acceleration = 0

  const moveOrigin = () => {
    velocity += acceleration
    origin.x += velocity
    origin.y += 2 * p.noise(origin.x)

    if (velocity > 10 || velocity < 0) {
      acceleration *= -1
    }
  }

  const checkBorders = () => {
    if (origin.x > p.width) {
      origin.x = 0
    }

    if (origin.x < 0) {
      origin.x = p.width
    }

    if (origin.y > p.height) {
      origin.y = 0
    }

    if (origin.y < 0) {
      origin.y = p.height
    }
  }

  return { moveOrigin, checkBorders, origin }
}

export default Origin
