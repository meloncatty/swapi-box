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
      'person_name': name,
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

const peopleResult = (people, homeworlds, species) => (people.map(({person_name}, idx) => ({person_name,  ...homeworlds[idx], ...species[idx] })))

const getPlanetInfo = (planets) => {
  return planets.map(({name, terrain, population, residents, climate})=> ({
    'planet_name': name,
    'terrain': terrain,
    'population': population,
    'resident': residents,
    'climate': climate
  }))
}

const getResidentsInfo = (planets) => {
  return planets.map(planet => {
    return planet.resident.map(url => {
      const cleanUrl = url.split('/api/')
      return cleanUrl[1]
    })
  })
}

const planetResult = (planetInfo, residents) => {
  const resident = residents.map(resident => resident.name ? resident.name : 'Unknown')
  return planetInfo.map(
   ({planet_name, terrain, population, climate}, idx) => ({planet_name, terrain, population, climate,  'resident' : resident[idx] }))}


const getVehicleInfo = (vehicles) => {
  return vehicles.map(({name, model, passengers, vehicle_class}) =>  {
    console.log(name)
    const cleanName = name.split(' ').slice(0, 3).join(' ')
    const vehicleObject =
      {
        'vehicle_name': cleanName,
        'model': model,
        'passengers': passengers,
        'vehicle_class': vehicle_class
      }
    return vehicleObject
  })
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
  planetResult,
  getVehicleInfo
}
