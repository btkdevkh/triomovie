import '../assets/css/Movies.css'
import { IMovie } from '../types/IMovie';
import Movie from "./Movie";

type Props = {
  documents: IMovie[]
}

export default function Movies({ documents }: Props) {
  return (
    <>
    <main className="movies">
      {documents &&
      documents.map(doc => (
        <Movie key={doc.id} document={doc} />
      ))}
    </main>
    </>
  )
}
