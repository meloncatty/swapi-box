const updateFilmText = (movies)=> {
  return movies.map(({title, opening_crawl, episode_id}) => {
    return {
      title,
      episode_id,
      opening_crawl
    }
  })
}

const getPeopleInfo = (people) => {
  return people.map(({name, homeworld, species}) => (
    {
      'personName': name,
      'personHomeWorld': homeworld,
      'personSpecies': species
    }
  ))
}

const getHomeworldInfo = (homeworlds) => {
  return homeworlds.map((person) => {
    const cleanHomeworldUrl = person.personHomeWorld.split('/api/')
    return cleanHomeworldUrl[1]
  })
}

const cleanHomeworldInfo = (homeworldInfo) => {
  return homeworldInfo.map(({name, population}) => (
    {
      'homeworld': name,
      'population': population
    }
  ))
}

const getSpeciesInfo = (species) => {
  return species.map(species => {
    return species.personSpecies.map(url => {
      const cleanUrl =  url.split('/api/')
      return cleanUrl[1]
    })
  })
}

const cleanSpeciesInfo = (speciesInfo) => {
  return speciesInfo.map(({name, language}) => (
    {
      'species': name,
      'language': language
    }
  ))
}

const peopleResult = (people, homeworlds, species) => (people.map(({personName}, idx) => ({personName,  ...homeworlds[idx], ...species[idx] })))

const getPlanetInfo = (planets) => {
  return planets.map(({name, terrain, population, residents, climate})=> ({
    'name': name,
    'terrain': terrain,
    'population': population,
    'residents': residents,
    'climate': climate
  }))
}

const getResidentsInfo = (planets) => {
  return planets.map(planet => {
    return planet.residents.map(url => {
      const cleanUrl = url.split('/api/')
      return cleanUrl[1]
    })
  })
}

const planetResult = (planetInfo, residents) => {
  const resident = residents.map(resident => resident.name ? resident.name : 'Unknown')
  return planetInfo.map(
   ({name, terrain, population, climate}, idx) => ({name, terrain, population, climate,  'resident' : resident[idx] }))}

const cleanResidents = (residents) => {
  return residents.filter(resident => resident.name)
}

export {
  updateFilmText,
  getPeopleInfo,
  getHomeworldInfo,
  cleanHomeworldInfo,
  getSpeciesInfo,
  cleanSpeciesInfo,
  peopleResult,
  getPlanetInfo,
  getResidentsInfo,
  planetResult
}
