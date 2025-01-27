import { useEffect,useState } from 'react'
import styles from './gallery.module.scss'
function GalleryCar(){

    console.log('Chargement composant galerie')
    const [datas,setDatas]=useState([])
    
    const getDatas=async()=>{
        const response=await fetch('http://localhost:4000/cars')
        const data=await response.json()
        data!==datas?setDatas(data):datas
    }  

    useEffect(()=>{getDatas()},[])

    console.log(datas)
    return(
        <div className={styles.gallery}>
            <h2>Parc véhicules</h2>
            <ul className={styles.gallery__items}>
                {datas.map(data=>{
                    return(
                    <li key={data._id} className={styles.item}>
                        <img className={styles.item__picture} src={data.imageUrl} alt="" />
                        <div className={styles.item__infos}>
                            <h3>{data.marque}</h3>
                            <p>{data.model}</p>
                            <p>{data.immatriculation}</p>
                            <p>{data._id}</p>
                        </div>
                    </li>)
                })}

            </ul>
        </div>
    )
}
export default GalleryCar