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
  console.log(homeworlds)
}

export {
  updateFilmText,
  getPeopleInfo,
  getHomeworldInfo
}


//first i get people, which gives me name
//then i need to fetch homeworld, which gives me name and population
//then i need to fetch species, which gives me name and language
