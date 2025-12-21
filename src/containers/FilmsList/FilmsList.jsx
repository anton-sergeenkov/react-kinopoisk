import { useState, useEffect } from 'react'
import { getList as apiGetListFilms } from '../../api/actions/films'
import UiCard from '../../ui-kit/UiCard'
import { useNavigate } from "react-router"

import styles from './styles.module.css'

const params = {
  countries: 1,
  genres: 11,
  order: 'RATING',
  type: 'FILM',
  yearFrom: '2020',
}

const FilmsList = () => {
  const [data, setData] = useState([])

  const navigate = useNavigate()
  
  useEffect(() => {
    (async () => {
      const data = await apiGetListFilms(params)
      data && setData(data)
    })()
  }, []);

  const handleClick = async (id) => {
    navigate('/film/'+id)
  }

  return (
    <div className={styles.wrapper}>
      {data.length !== 0 && data.map(item => (
        <UiCard
          key={item.kinopoiskId}
          data={{
            id: item.kinopoiskId,
            poster: item.posterUrlPreview,
            name: item.nameRu,
            year: item.year
          }}
          onClick={handleClick}
        />
      ))}
    </div>
  )
}

export default FilmsList
