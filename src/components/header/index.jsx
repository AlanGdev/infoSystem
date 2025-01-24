import styles from './Header.module.scss'
import Navbar from '../navbar'
function Header(){
    return(
        <div className={styles.header}>
            <h1>{`InfoSystem - Le système d'information professionnel`}</h1>
            <Navbar/>
        </div>
    )
}
export default Header