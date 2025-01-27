import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
function Navbar(){
    return(
        <div className={styles.navbar}>
            <Link className={styles.navbar__link} to='/'>Accueil</Link>
            <Link className={styles.navbar__link} to='/cars'>Véhicules</Link>
            <Link className={styles.navbar__link} to='/techs'>Techniciens</Link>
        </div>
    )
}
export default Navbar