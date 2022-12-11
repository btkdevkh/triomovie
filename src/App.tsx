import { useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Movies from './components/Movies'
import useFetch from './hooks/useFetch'
import { IMovie } from './types/IMovie'

function App() {
  const { documents } = useFetch()
  const [query, setQuery] = useState<string>('')

  const orderedMoviesByYear = documents?.sort((a, b) => b.released_year - a.released_year)
  const filteredMovies = useMemo(
    () => orderedMoviesByYear?.filter(doc => doc.title.toLowerCase().includes(query)) as IMovie[], 
    [documents, query]
  )

  const handleChange = (value: string) => setQuery(value.toLowerCase())

  return (
    <BrowserRouter>
      <Header handleChange={handleChange} />
      <div className="container">
        <Routes>
          <Route path='/' element={<Movies documents={filteredMovies as IMovie[]} />} />
          <Route path='/recent' element={<Navigate to='/' />} />
          <Route path='/movies' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
