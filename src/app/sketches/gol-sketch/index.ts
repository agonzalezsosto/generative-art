import p5 from 'p5'

const GolSketch = (p: p5) => {
  const dimension = 30
  let cells: number[][] = []
  let cellsBuffer: Array<Array<number>> = []

  let xInterval = 0
  let yInterval = 0
  const timeInterval = 100
  let lastRecordedTime = 0

  p.setup = () => {
    const canvas = p.createCanvas(500, 500)
    canvas.parent('container-gol')
    p.background(0)
    p.noStroke()
    p.stroke(255)
    p.fill(255)
    p.noSmooth()
    xInterval = p.width / dimension
    yInterval = p.height / dimension

    for (let i = 0; i < dimension; i++) {
      cells[i] = []
      for (let j = 0; j < dimension; j++) {
        cells[i][j] = p.int(p.random(0, 2))
      }
    }

    setInterval(() => {
      for (let i = 0; i < dimension; i++) {
        cells[i] = []
        for (let j = 0; j < dimension; j++) {
          cells[i][j] = p.int(p.random(0, 2))
        }
      }
    }, 2000)
  }

  p.draw = () => {
    p.background(0)
    for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
        const x = xInterval * i
        const y = yInterval * j

        if (cells[i][j] === 0) {
          p.rect(x, y, xInterval, yInterval)
        }
      }
    }

    if (p.millis() - lastRecordedTime > timeInterval) {
      gameRound()
      lastRecordedTime = p.millis()
    }
  }

  p.mousePressed = () => {
    refill()
  }

  p.mouseDragged = () => {
    refill()
  }

  const refill = () => {
    const locX = p.int(p.map(p.mouseX, 0, p.width, 0, dimension))
    const locY = p.int(p.map(p.mouseY, 0, p.height, 0, dimension))

    for (let i = locX - 5; i < locX + 5; i++) {
      for (let j = locY - 5; j < locY + 5; j++) {
        if (i > 0 && i < dimension && j > 0 && j < dimension) {
          cells[i][j] = p.int(p.random(0, 2))
        }
      }
    }
  }

  const gameRound = () => {
    cellsBuffer = Object.assign([], cells)

    for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
        let count = 0
        for (let a = i - 1; a <= i + 1; a++) {
          for (let b = j - 1; b <= j + 1; b++) {
            if (a > 0 && a < dimension && b > 0 && b < dimension) {
              if (!(a === i && b === j)) {
                const val = cellsBuffer[a][b]
                if (val === 1) {
                  count++
                }
              }
            }
          }

          if (count === 3) {
            cells[i][j] = 1
          } else {
            cells[i][j] = 0
          }
        }
      }
    }
  }
}

export default GolSketch
