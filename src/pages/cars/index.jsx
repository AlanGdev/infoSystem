import GalleryCar from'../../components/galleryCar'
import NouveauCar from '../../components/nouveauCar'
import styles from './cars.module.scss'
function Cars(){
    return(
        <div className={styles.content}>
            <div className={styles.content__item}>
            <GalleryCar />
            </div><div className={styles.content__item}>
            <NouveauCar className={styles.content__item}/>

            </div></div>
    )
}
export default Cars