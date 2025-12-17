import { useState, useEffect } from 'react'
import { getList as apiGetListFilms } from '../../api/actions/films'
import Film from '../Film'
import UiCard from '../../ui-kit/UiCard'

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
  const [kinopoiskId, setKinopoiskId] = useState(null)
  
  useEffect(() => {
    (async () => {
      const data = await apiGetListFilms(params)
      data && setData(data)
    })()
  }, []);

  const handleClick = async (id) => {
    setKinopoiskId(id)
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

      <Film kinopoiskId={kinopoiskId} setKinopoiskId={setKinopoiskId} />
    </div>
  )
}

export default FilmsList
