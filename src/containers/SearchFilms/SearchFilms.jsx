import { useState, useEffect } from 'react'
import { search as apiSearchFilms } from '../../api/actions/films'
import UiCard from '../../ui-kit/UiCard'
import { useNavigate } from "react-router"

import styles from './styles.module.css'

const SearchFilms = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')

  const navigate = useNavigate()

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

  const handleClick = async (id) => {
    navigate('/film/'+id)
  }

  return (
    <div>
      <input type="text" placeholder='Поиск фильма' value={value} onChange={onChange} />

      <div className={styles.wrapper}>
        {data.length !== 0 ? data.map(item => (
          <UiCard
            key={item.filmId}
            data={{
              id: item.filmId,
              poster: item.posterUrlPreview,
              name: item.nameRu,
              year: item.year
            }}
            onClick={handleClick}
          />
        )) : (
          <h4>Не найдено</h4>
        )}
      </div>
    </div>
  )
}

export default SearchFilms
