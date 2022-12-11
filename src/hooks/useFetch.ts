import { useEffect, useState } from "react";
import { movies } from "../db/db";

const useFetch = () => {
  const [documents, setDocuments] = useState<any[] | null>(null)
  
  const getDocuments = async () => {
    // in case using php rest api
    // const API_URL = "http://localhost/PHP-DEVS/php-triosound/api/triomovie"
    // const res = await fetch(API_URL)
    // const data = await res.json()
    // if(!data) return
    // setDocuments(data.items)

    // in case using static datas
    const data = await movies
    setDocuments(data)
  }

  useEffect(() => {
    if(documents === null) getDocuments()
  }, [documents])

  return { documents, getDocuments, setDocuments }
}

export default useFetch
