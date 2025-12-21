import { Link } from "react-router";

import styles from './styles.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">Home</Link>
      <Link to="/films">Список фильмов</Link>
      <Link to="/search">Поиск фильма</Link>
    </div>
  )
}

export default Header
