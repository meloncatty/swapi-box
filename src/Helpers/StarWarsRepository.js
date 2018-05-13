const updateFilmText = (movies)=> {
  const movieList = movies.map(({title, opening_crawl, episode_id}) => {
    return {
      title,
      episode_id,
      opening_crawl
    }
  })
  return movieList
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
  const homeworldsList = homeworlds.map((person) => {
    const cleanHomeworldUrl = person.personHomeWorld.split('/api/')
    return cleanHomeworldUrl[1]
  })
  return homeworldsList
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
  const speciesList = species.map(species => {
    return species.personSpecies.map(url => {
      const cleanUrl =  url.split('/api/')
      return cleanUrl[1]
    })
  })
  console.log(speciesList)
  return speciesList
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

export {
  updateFilmText,
  getPeopleInfo,
  getHomeworldInfo,
  cleanHomeworldInfo,
  getSpeciesInfo,
  cleanSpeciesInfo,
  peopleResult
}


//first i get people, which gives me name
//then i need to fetch homeworld, which gives me name and population
//then i need to fetch species, which gives me name and language
