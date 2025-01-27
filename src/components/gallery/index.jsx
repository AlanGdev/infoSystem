import { useEffect,useState } from 'react'
import styles from './gallery.module.scss'
import { Link } from 'react-router-dom'
function Gallery(){

    console.log('Chargement composant galerie')
    const [datas,setDatas]=useState([])
    
    const getDatas=async()=>{
        const response=await fetch('http://localhost:4000/techs')
        const data=await response.json()
        data!==datas?setDatas(data):datas
    }  

    useEffect(()=>{getDatas()},[])

    console.log(datas)
    return(
        <div className={styles.gallery}>
            <h2>Galerie du personnel</h2>
            <ul className={styles.gallery__items}>
                {datas.map(data=>{
                    return(
                        <Link key={data._id} to={`/techs/${data._id}`}>
                        <li key={data._id} className={styles.item}>
                            <img className={styles.item__picture} src={data.imageUrl} alt="" />
                            <div className={styles.item__infos}>
                                <h3>{data.nom}</h3>
                                <p>{data.prenom}</p>
                                <p>{data._id}</p>
                            </div>
                        </li>
                        </Link>
                        )
                })}

            </ul>
        </div>
    )
}
export default Gallery