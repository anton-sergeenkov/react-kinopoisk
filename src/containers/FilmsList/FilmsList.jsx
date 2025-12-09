import { useState, useEffect } from 'react'
import { getList as apiGetListFilms } from '../../api/actions/films'
import Film from '../Film'

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

  const onClick = async (id) => {
    setKinopoiskId(id)
  }

  return (
    <div className={styles.wrapper}>
      {data.length !== 0 && data.map(item => (
        <div key={item.kinopoiskId} className={styles.item} onClick={() => onClick(item.kinopoiskId)}>
          <img
            src={item.posterUrlPreview} 
            alt="Poster" 
            className={styles.img}
          />
          <div className={styles.name}>{`${item.nameRu} (${item.year})`}</div>
        </div>
      ))}

      <Film kinopoiskId={kinopoiskId} setKinopoiskId={setKinopoiskId} />
    </div>
  )
}

export default FilmsList
