import {updateFilmText, getPeopleInfo, getHomeworldInfo} from './StarWarsRepository'

export default class FetchData {
  constructor() {
    this.filmText = []
    this.people = []
    this.homeworld = []
  }

  fetchInfo = async (resource) => {
    const url = 'https://swapi.co/api/' + resource + '/'
    console.log(url)
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
    const getHomeworld = await this.fetchHomeworld(...peopleInfo)
    this.people = [...peopleInfo]
  }

  fetchHomeworld = async (resource) => {
    const getInfo = getHomeworldInfo(resource)
    // const getHomeworld = await this.fetchInfo(resourceLink[1])
    const homeworldInfo = await getHomeworldInfo(getHomeworld.results)
    this.homeworld = [...homeworldInfo]
  }
}
