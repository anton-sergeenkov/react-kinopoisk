import { useState, useEffect } from 'react'
import { get as apiGetFilms } from '../../api/actions/films'
import { useParams, useNavigate } from "react-router"

import styles from './styles.module.css'

const Film = () => {
  const [data, setData] = useState([])

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const data = await apiGetFilms(params.id)
      setData(data)
    })()
  }, [params.id]);

  const onClose = () => {
    navigate(-1)
    setData([])
  }

  return (
    <div>
      {data && data.length !== 0 && (
        <div className={styles.wrapper}>
          <img
            src={data.posterUrl} 
            alt="Poster" 
            className={styles.img}
          />
          <div className={styles.content}>
            <h3 className={styles.header}>{data.nameRu}</h3>
            <div>{data.description}</div>
            <button onClick={onClose}>Назад</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Film
