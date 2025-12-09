import { useState, useEffect } from 'react'
import { get as apiGetFilms } from '../../api/actions/films'

import styles from './styles.module.css'

const Film = (props) => {
  const {
    kinopoiskId,
    setKinopoiskId
  } = props

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      if (kinopoiskId) {
        const data = await apiGetFilms(kinopoiskId)
        setData(data)
      }
    })()
  }, [kinopoiskId]);

  const onClose = () => {
    setData([])
    setKinopoiskId(null)
  }

  return (
    <div>
      {data && data.length !== 0 && (
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <img
              src={data.posterUrl} 
              alt="Poster" 
              className={styles.img}
            />
            <div className={styles.content}>
              <h3 className={styles.header}>{data.nameRu}</h3>
              <div>{data.description}</div>
              <button onClick={onClose}>Закрыть</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Film
