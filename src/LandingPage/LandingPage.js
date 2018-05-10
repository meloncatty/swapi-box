import React from 'react'

const LandingPage =(props)=> {
  const getCrawl = () => {
    if(props.filmText.length) {
      const random = parseInt(Math.random() * 8)
      const randomFilm = props.filmText[random]
      return (
        <div className='crawl'>
          <p>{randomFilm.opening_crawl}</p>
          <p>{randomFilm.title}</p>
          <h1>{randomFilm.episode_id}</h1>
        </div>
      )
    }
  }

  return (
    <div className='comp-container'>
      <div className='fade'></div>
      <section className='crawl-container'>
        {getCrawl()}
      </section>
    </div>
  )
}

export default LandingPage
