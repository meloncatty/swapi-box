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

export {
  updateFilmText
}
