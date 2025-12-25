import cn from "classnames";
import { NavLink } from "react-router";

import styles from './styles.module.css'

const Header = () => {
  const setActiveClass = (statuses) => {
    return statuses.isActive ? cn(styles.link, styles.linkActive) : styles.link;
  };

  return (
    <div className={styles.wrapper}>
      <NavLink to="/" className={setActiveClass}>Home</NavLink>
      <NavLink to="/films" className={setActiveClass}>Список фильмов</NavLink>
      <NavLink to="/search" className={setActiveClass}>Поиск фильма</NavLink>
    </div>
  )
}

export default Header
