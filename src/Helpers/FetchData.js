import {updateFilmText} from './StarWarsRepository'

export default class FetchData {
  constructor() {
    this.info = []
  }

  fetchInfo = async (resource) => {
    const url = 'https://swapi.co/api/' + resource
    const response = await fetch(url)
    const resourceInfo = await response.json()
    const films = await updateFilmText(resourceInfo.results)
    this.info = [...films]
  }
}
