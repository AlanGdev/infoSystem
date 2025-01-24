import Gallery from'../../components/gallery'
import NouveauTech from '../../components/nouveauTech'
import styles from './techs.module.scss'
function Techs(){
    return(
        <div className={styles.content}>
            <div className={styles.content__item}>
            <Gallery />
            </div><div className={styles.content__item}>
            <NouveauTech className={styles.content__item}/>

            </div></div>
    )
}
export default Techs