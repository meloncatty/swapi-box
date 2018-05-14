import {
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
  getVehicleInfo } from './StarWarsRepository'

export default class FetchData {
  constructor() {
    this.filmText = []
    this.people = []
    this.planets = []
    this.vehicles = []
  }

  fetchInfo = async (resource) => {
    const url = 'https://swapi.co/api/' + resource 
    const response = await fetch(url)
    const resourcePromise = await response.json()
    return resourcePromise
  }

  gatherFilmCrawl = async (resource) => {
    const fetchFilmCrawl = await this.fetchInfo(resource)
    const films = updateFilmText(fetchFilmCrawl.results)
    this.filmText = [...films]
  }

  fetchPeople = async (resource) => {
    const getInfo = await this.fetchInfo(resource)
    const peopleInfo = getPeopleInfo(getInfo.results)
    const getHomeworldList = getHomeworldInfo(peopleInfo)
    const getHomeworlds = await this.fetchHomeworld(getHomeworldList)
    const cleanHomeworlds = cleanHomeworldInfo(getHomeworlds)
    const getSpeciesList = getSpeciesInfo(peopleInfo)
    const getSpecies = await this.fetchSpecies(getSpeciesList)
    const cleanSpecies = cleanSpeciesInfo(getSpecies)
    const finalData = peopleResult(peopleInfo, cleanHomeworlds, cleanSpecies)
    this.people = [...finalData]
  }

  fetchHomeworld = async (resource) => {
    const homeworlds = resource.map(homeworld => {
      return this.fetchInfo(homeworld)
    })
    return Promise.all(homeworlds)
  }

  fetchSpecies = async (resource) => {
    const getSpecies = resource.map(species => {
      return this.fetchInfo(species)
    })
    return Promise.all(getSpecies)
  }

  fetchPlanets = async (resource) => {
    const getInfo = await this.fetchInfo(resource)
    const planetInfo = getPlanetInfo(getInfo.results)
    const getResidentsList = getResidentsInfo(planetInfo)
    const getResidents = await this.fetchResidents(getResidentsList)
    const finalData = planetResult(planetInfo, getResidents)
    this.planets = [...finalData]
  }

  fetchResidents = async (resource) => {
    const getResident = resource.map(planet => {
      const cleanList = planet.slice(0, 1)
      return this.fetchInfo(cleanList)
    })
    return Promise.all(getResident)
  }

  fetchVehicles = async (resource) => {
    const getInfo = await this.fetchInfo(resource)
    const vehicleInfo = getVehicleInfo(getInfo.results)
    this.vehicles = [...vehicleInfo]
  }
}

