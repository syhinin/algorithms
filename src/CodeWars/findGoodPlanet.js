const REQUIRED_ELEMENTS = ['H', 'C', 'N', 'O', 'P', 'Ca']

function bestPlanet(solarSystem, maxSize) {
  let goodPlanets = {}
  let bestPlanet = ''

  for (const candidate of solarSystem) {
    let [elements, currentMaxSize] = candidate.split('_')
    let listOfElements = elements.split(/(?=[A-Z])/)

    let isGoodPlanets = REQUIRED_ELEMENTS.every(item =>
      listOfElements.includes(item),
    )

    if (isGoodPlanets) {
      goodPlanets[currentMaxSize] = candidate
    }
  }

  const planetSize = Object.keys(goodPlanets)

  if (planetSize.length > 0) {
    let currentMaxSize = 0

    for (const size of planetSize) {
      if (Number(size) > Number(currentMaxSize) && Number(size) <= maxSize) {
        currentMaxSize = size
        bestPlanet = goodPlanets[size]
      }
    }
  }

  if (bestPlanet) {
    return bestPlanet
  }

  return ''
}
