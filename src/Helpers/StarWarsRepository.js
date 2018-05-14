const updateFilmText = movies => movies.map(({ title, opening_crawl, episode_id }) => ({
  title,
  episodeId: episode_id,
  openingCrawl: opening_crawl,
}));

const getPeopleInfo = people => people.map(({ name, homeworld, species }) => (
  {
    personName: name,
    personHomeWorld: homeworld,
    personSpecies: species,
  }
));

const getHomeworldInfo = homeworlds => homeworlds.map((person) => {
  const cleanHomeworldUrl = person.personHomeWorld.split('/api/');
  return cleanHomeworldUrl[1];
});

const cleanHomeworldInfo = homeworldInfo => homeworldInfo.map(({ name, population }) => (
  {
    homeworld: name,
    population,
  }
));

const getSpeciesInfo = species => species.map(species => species.personSpecies.map((url) => {
  const cleanUrl = url.split('/api/');
  return cleanUrl[1];
}));

const cleanSpeciesInfo = speciesInfo => speciesInfo.map(({ name, language }) => (
  {
    species: name,
    language,
  }
));

const peopleResult = (people, homeworlds, species) => (people.map(({ personName }, idx) => ({ personName, ...homeworlds[idx], ...species[idx] })));

const getPlanetInfo = planets => planets.map(({
  name, terrain, population, residents, climate,
}) => ({
  planetName: name,
  terrain,
  population,
  resident: residents,
  climate,
}));

const getResidentsInfo = planets => planets.map(planet => planet.resident.map((url) => {
  const cleanUrl = url.split('/api/');
  return cleanUrl[1];
}));

const planetResult = (planetInfo, residents) => {
  const resident = residents.map(resident => (resident.name ? resident.name : 'Unknown'));
  return planetInfo.map(({
    planetName, terrain, population, climate,
  }, idx) => ({
    planetName, terrain, population, climate, resident: resident[idx],
  }));
};


const getVehicleInfo = vehicles => vehicles.map(({
  name, model, passengers, vehicle_class,
}) => {
  console.log(name);
  const cleanName = name.split(' ').slice(0, 3).join(' ');
  const vehicleObject =
      {
        vehicleName: cleanName,
        model,
        passengers,
        vehicleClass: vehicle_class,
      };
  return vehicleObject;
});

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
  getVehicleInfo,
};
