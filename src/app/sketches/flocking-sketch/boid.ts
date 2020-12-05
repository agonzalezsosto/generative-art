import p5 from 'p5'

export type BoidType = {
  update: () => void
  show: (_color: p5.Color) => void
  reset: () => void
  flock: (otherBoids: BoidType[]) => void
  position: p5.Vector
  velocity: p5.Vector
}

export const Boid = (p: p5) => {
  let position = p.createVector(p.random(p.width), p.random(p.height))
  let velocity = p.createVector(p.random(0, 0.01), p.random(0, 0.01))
  let acceleration = p.createVector(p.random(0, 0.01), p.random(0, 0.01))
  let color: p5.Color = p.color(255)

  const perceptionRadius = 100
  const maxSpeed = 5
  const maxForce = 0.6

  const edges = () => {
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

  const align = (otherBoids: BoidType[]) => {
    let steering = p.createVector()
    let totalInRange = 0

    for (let i = 0; i < otherBoids.length; i++) {
      const distance = p.dist(
        position.x,
        position.y,
        otherBoids[i].position.x,
        otherBoids[i].position.y
      )
      if (otherBoids[i] !== this && distance < perceptionRadius) {
        steering.add(otherBoids[i].velocity)
        totalInRange++
      }
    }
    if (totalInRange > 0) {
      steering.div(totalInRange)
      steering.setMag(maxSpeed)
      steering.sub(velocity)
      steering.limit(maxForce)
    }
    return steering
  }

  const separation = (otherBoids: BoidType[]) => {
    let average = p.createVector()
    let totalInRange = 0

    for (let i = 0; i < otherBoids.length; i++) {
      const distance = p.dist(
        position.x,
        position.y,
        otherBoids[i].position.x,
        otherBoids[i].position.y
      )
      if (otherBoids[i] !== this && distance < perceptionRadius) {
        const diff = p5.Vector.sub(position, otherBoids[i].position)
        diff.div(distance * distance)
        average.add(diff)
        totalInRange++
      }
    }
    if (totalInRange > 0) {
      average.div(totalInRange)
      average.setMag(maxSpeed)
      average.sub(velocity)
      average.limit(maxForce)
    }

    return average
  }

  const cohesion = (otherBoids: BoidType[]) => {
    let steering = p.createVector()
    let totalInRange = 0

    for (let i = 0; i < otherBoids.length; i++) {
      const distance = p.dist(
        position.x,
        position.y,
        otherBoids[i].position.x,
        otherBoids[i].position.y
      )

      if (otherBoids[i] !== this && distance < perceptionRadius) {
        steering.add(otherBoids[i].position)
        totalInRange++
      }
    }

    if (totalInRange > 0) {
      steering.div(totalInRange)
      steering.setMag(maxSpeed)
      steering.sub(velocity)
      steering.limit(maxForce)
    }
    return steering
  }

  const flock = (otherBoids: BoidType[]) => {
    lines(otherBoids)
    const sep = separation(otherBoids)
    const al = align(otherBoids)
    const coh = cohesion(otherBoids)
    acceleration.add(sep)
    acceleration.add(al)
    acceleration.add(coh)
  }

  const lines = (otherBoids: BoidType[]) => {
    for (let i = 0; i < otherBoids.length; i++) {
      const distance = p.dist(
        position.x,
        position.y,
        otherBoids[i].position.x,
        otherBoids[i].position.y
      )

      if (otherBoids[i] !== this && distance < perceptionRadius / 2) {
        const diff = p.dist(
          position.x,
          position.y,
          otherBoids[i].position.x,
          otherBoids[i].position.y
        )
        p.stroke(
          p.red(color),
          p.green(color),
          p.blue(color),
          p.map(perceptionRadius / 2 - diff, 0, perceptionRadius / 2, 0, 255)
        )
        p.line(
          position.x,
          position.y,
          otherBoids[i].position.x,
          otherBoids[i].position.y
        )
      }
    }
  }

  const update = () => {
    edges()
    velocity.add(acceleration)
    position.add(velocity)
    acceleration.mult(0)
  }

  const show = (_color: p5.Color) => {
    color = _color
    p.noStroke()
    p.fill(color)
    p.circle(position.x, position.y, 10)
  }

  const reset = () => {
    position = p.createVector(p.random(p.width), p.random(p.height))
  }

  return { update, show, flock, reset, position, velocity }
}
