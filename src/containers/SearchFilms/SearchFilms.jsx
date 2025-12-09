import { useState, useEffect } from 'react'
import { search as apiSearchFilms } from '../../api/actions/films'

import styles from './styles.module.css'

const SearchFilms = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    (async () => {
      const params = {
        keyword: value
      }

      const data = await apiSearchFilms(params)
      data && setData(data)
    })()
  }, [value]);

  const onChange = e => setValue(e.target.value)

  // TODO: Ui-компонент карточки фильма
  // Передвать только необходимые поля
  // Для FilmsList - kinopoiskId, для SearchFilms - filmId
  return (
    <div>
      <input type="text" placeholder='Поиск фильма' value={value} onChange={onChange} />

      <div className={styles.wrapper}>
        {data.length !== 0 ? data.map(item => (
          <div key={item.filmId} className={styles.item}>
            <img
              src={item.posterUrlPreview} 
              alt="Poster" 
              className={styles.img}
            />
            <div className={styles.name}>{`${item.nameRu} (${item.year})`}</div>
          </div>
        )) : (
          <h4>Не найдено</h4>
        )}
      </div>
    </div>
  )
}

export default SearchFilms
