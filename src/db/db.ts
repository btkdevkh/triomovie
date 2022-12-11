import { IMovie } from "../types/IMovie"

const datas = [
  {
    "id": 1,
    "title": "Predators",
    "rating": 6.4,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/54LZIRznS0Zjn7ZDXrsGVe3HXei.jpg",
    "movie_url": "https://azm.to/movie/predators-0a249",
    "created_at": "09/12/2022",
    "released_year": 2010
  },
  {
    "id": 2,
    "title": "Avatar",
    "rating": 7.8,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    "movie_url": "https://azm.to/movie/avatar-ab70a",
    "created_at": "09/12/2022",
    "released_year": 2009
  },
  {
    "id": 3,
    "title": "Apocalypto",
    "rating": 7.8,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg",
    "movie_url": "https://azm.to/movie/apocalypto-9f481",
    "created_at": "09/12/2022",
    "released_year": 2006
  },
  {
    "id": 4,
    "title": "Alien Covenant",
    "rating": 6.4,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
    "movie_url": "https://azm.to/movie/alien-covenant-2e1b6",
    "created_at": "09/12/2022",
    "released_year": 2017
  },
  {
    "id": 5,
    "title": "The Notebook",
    "rating": 7.8,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
    "movie_url": "https://azm.to/movie/the-notebook-3d123",
    "created_at": "09/12/2022",
    "released_year": 2004
  },
  {
    "id": 6,
    "title": "Spiderman",
    "rating": 7.3,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    "movie_url": "https://azm.to/movie/spider-man-homecoming-85486",
    "created_at": "09/12/2022",
    "released_year": 2017
  },
  {
    "id": 7,
    "title": "Bruce Almighty",
    "rating": 6.6,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/f0QqG14SZYYZcV4VWykVc5w13dz.jpg",
    "movie_url": "https://azm.to/movie/bruce-almighty-add9d",
    "created_at": "09/12/2022",
    "released_year": 2003
  },
  {
    "id": 8,
    "title": "The Simpsons Movie",
    "rating": 6.9,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/gzb6P78zeFTnv9eoFYnaJ2YrZ5q.jpg",
    "movie_url": "https://azm.to/movie/the-simpsons-movie-2d3a2",
    "created_at": "09/12/2022",
    "released_year": 2007
  },
  {
    "id": 9,
    "title": "Johnny English",
    "rating": 6.9,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/lx3Y7teA6DaoQ6cIhwzrlnDZpFW.jpg",
    "movie_url": "https://azm.to/movie/johnny-english-221e0",
    "created_at": "09/12/2022",
    "released_year": 2003
  },
  {
    "id": 10,
    "title": "Interstellar",
    "rating": 8.3,
    "sub_title": "",
    "cover_url": "https://image.tmdb.org/t/p/w400/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "movie_url": "https://azm.to/movie/interstellar-3ee4a",
    "created_at": "09/12/2022",
    "released_year": 2014
  }
]

export const movies = new Promise<IMovie[]>(r => setTimeout(() => r(datas), 1000))
