import '../assets/css/Header.css'
import { Link } from 'react-router-dom'
import Search from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faFileVideo } from '@fortawesome/free-solid-svg-icons'

type Props = {
  handleChange: (value: string) => void
}

export default function Header({ handleChange }: Props) {
  return (
    <header className="header">
      <div className="container">
        <Search handleChange={handleChange} />
        <nav>
          <ul>
            <li><Link to="/recent"><FontAwesomeIcon icon={faFileVideo} /> </Link></li>
            <li><Link to="/movies"><FontAwesomeIcon icon={faVideo} /> </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
