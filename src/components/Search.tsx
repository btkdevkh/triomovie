import '../assets/css/Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

type Props = {
  handleChange: (value: string) => void
}

export default function Search({ handleChange }: Props) {  
  return (
    <form className='search-form'>
      <FontAwesomeIcon icon={faSearch} />
      <input 
        type="search" 
        placeholder="Search the movie ..." 
        onChange={(e) => handleChange(e.target.value)}
      />
    </form>
  )
}
