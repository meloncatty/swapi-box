import {updateFilmText, getPeopleInfo, getHomeworldInfo, cleanHomeworldInfo, getSpeciesInfo, cleanSpeciesInfo, peopleResult} from './StarWarsRepository'

export default class FetchData {
  constructor() {
    this.filmText = []
    this.people = []
  }

  fetchInfo = async (resource) => {
    const url = 'https://swapi.co/api/' + resource 
    const response = await fetch(url)
    const resourcePromise = await response.json()
    return resourcePromise
  }

  gatherFilmCrawl = async (resource) => {
    const fetchFilmCrawl = await this.fetchInfo(resource)
    const films = await updateFilmText(fetchFilmCrawl.results)
    this.filmText = [...films]
  }

  fetchPeople = async (resource) => {
    const getInfo = await this.fetchInfo(resource)
    const peopleInfo = await getPeopleInfo(getInfo.results)
    const getHomeworldList = await getHomeworldInfo(peopleInfo)
    const getHomeworlds = await this.fetchHomeworld(getHomeworldList)
    const cleanHomeworlds = await cleanHomeworldInfo(getHomeworlds)
    const getSpeciesList = await getSpeciesInfo(peopleInfo)
    const getSpecies = await this.fetchSpecies(getSpeciesList)
    const cleanSpecies = await cleanSpeciesInfo(getSpecies)
    const finalData = await peopleResult(peopleInfo, cleanHomeworlds, cleanSpecies)
    this.people = [...finalData]
    
  }

  fetchHomeworld = async (resource) => {
    const homeworlds = await resource.map(homeworld => {
      return this.fetchInfo(homeworld)
    })
    return Promise.all(homeworlds)
  }

  fetchSpecies = async (resource) => {
    console.log(resource)
    const getSpecies = await resource.map(species => {
      return this.fetchInfo(species)
    })
    return Promise.all(getSpecies)
  }
}
