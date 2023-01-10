'use strict'

const inpMovie = document.querySelector('.input-movie')
const btnSearch = document.querySelector('.btn')

let labelImg = document.querySelector('.movie-img')
let labelTitle = document.querySelector('.movie-title')
let laberDate = document.querySelector('.movie-date')
let labelOverview = document.querySelector('.movie-overview')

const API_KEY = `62383ddaefde6ba60f4b5d5c2a7ddf56`

const fetchMovie = async name => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  )
  const data = await res.json()
  const result = data.results[0]
  console.log(result)

  labelImg.src = await result.poster_path
  labelTitle.textContent = result.title
  laberDate.textContent = result.release_date
  labelOverview.textContent = result.overview
}

btnSearch.addEventListener('click', function (e) {
  e.preventDefault()
  const movieName = inpMovie.value
  if (movieName === '') return alert('Enter Movie Name')
  fetchMovie(movieName)
})
