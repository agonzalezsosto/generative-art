import p5 from 'p5'

const IssSketch = (p: p5) => {
  let latitude: number = 0
  let longitude: number = 0

  p.setup = () => {
    const cnv = p.createCanvas(600, 400)
    cnv.parent('container-iss')
    p.frameRate(0.5)
    p.background(0)
  }

  p.draw = () => {
    updateData()
    let mapLat = p.map(latitude, -90, 90, 10, 250)
    let mapLon = p.map(longitude, -180, 180, 10, 250)

    p.translate(p.width / 2, p.height / 2)
    p.rotate(mapLat)
    p.stroke(255 - mapLat)
    p.line(0, 0, mapLat, mapLon)
  }

  const updateData = async () => {
    await fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
      .then(async (response) => {
        const result = await response.json()
        latitude = result.latitude
        longitude = result.longitude
      })
      .catch((err) => console.log(err))
  }
}

export default IssSketch
