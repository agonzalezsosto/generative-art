import p5 from 'p5'

const LSystem = (p: p5) => {
  const axiom = 'F'
  var sentence = axiom
  var rules: { srt: string; end: string }[] = []
  var len = 100
  var angle = 0
  var gen = 0

  rules[0] = {
    srt: 'F',
    end: 'FF+[+F-F-F]-[-F+F+F]',
  }

  p.setup = () => {
    const cnv = p.createCanvas(300, 300)
    cnv.parent('container-brush')
    p.background(0)
    turtle()
    angle = p.radians(25)
    setInterval(newGen, 1000)
  }

  const newGen = () => {
    let nextSentence = ''
    gen++

    if (gen > 4) {
      gen = 0
      sentence = 'F'
      nextSentence = ''
      len = 100
    }

    len *= 0.5

    for (let i = 0; i < sentence.length; i++) {
      const currentChar = sentence.charAt(i)
      let hasMatch = false
      for (let j = 0; j < rules.length; j++) {
        if (currentChar === rules[j].srt) {
          hasMatch = true
          nextSentence += rules[j].end
          break
        }
      }
      if (!hasMatch) {
        nextSentence += currentChar
      }
    }
    sentence = nextSentence
    turtle()
  }

  const turtle = () => {
    p.background(51)
    p.resetMatrix()
    p.translate(p.width / 2, p.height)
    p.stroke(255, 100)

    for (let i = 0; i < sentence.length; i++) {
      let currentChar = sentence.charAt(i)

      if (currentChar === 'F') {
        p.line(0, 0, 0, -len)
        p.translate(0, -len)
      } else if (currentChar === '+') {
        p.rotate(angle)
      } else if (currentChar === '-') {
        p.rotate(-angle)
      } else if (currentChar === '[') {
        p.push()
      } else if (currentChar === ']') {
        p.pop()
      }
    }
  }
}

export default LSystem
