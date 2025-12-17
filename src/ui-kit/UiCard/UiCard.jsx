import styles from './styles.module.css'

const UiCard = (props) => {
  const { data, onClick = () => null } = props

  return (
    <div className={styles.item} onClick={() => onClick(data.id)}>
      <img
        src={data.poster} 
        alt="Poster" 
        className={styles.img}
      />
      <div className={styles.name}>{`${data.name} (${data.year})`}</div>
    </div>
  )
}

export default UiCard
