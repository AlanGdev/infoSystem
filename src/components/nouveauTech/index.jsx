import styles from './nouveauTech.module.scss'
import { useEffect, useState } from 'react'


function NouveauTech(){
    const formData=new FormData()
    const [infos,setInfos]=useState({
        nom:'',
        prenom:'',
        birthDate:'',
        nSecu:'',
        nationality:'',
        imageUrl:''
    })
    const [file,setFile]=useState(null)
    const [imgSrc,setImgSrc]=useState(null)

    const getResponse=async()=>{
        const keys=Object.keys(infos)
        keys.map((key)=>formData.append(key,infos[key]))
        formData.append('file',file)
        try{console.log (JSON.stringify(formData))
            const response= await fetch('http://localhost:4000/techs/newtech',{
                method:'POST',
                body:formData
            })
                if(!response.ok){
                    console.log('Pas de réponse')
                    throw new Error(`Problème réponse nok: ${response.status}`)
                }
            const data=await response.json()
            console.log(data)           
        }catch(error){
            console.error(error)
        }
    }
    
const handleFileChange=(e)=>{
    const selectedFile=e.target.files[0]
    if(selectedFile){
        setFile(selectedFile)
        const reader=new FileReader()
        reader.onload=()=>{
            setImgSrc(reader.result)
        }
        reader.readAsDataURL(selectedFile)
    }
}



    
    return(
        <div> 
            <h2>Nouveau tech </h2>
            <div classname={styles.pictureContainer}>
            <img className={styles.picture} src={imgSrc} alt="" /></div>
            <div className={styles.form}>
                <input className={styles.form__input} type="text" placeholder="nom" onChange={(e)=>{
                    setInfos({...infos,nom:e.target.value})
                    }}/>
                <input className={styles.form__input} type="text" placeholder="prenom" onChange={(e)=>{
                    setInfos({...infos,prenom:e.target.value})
                }}/>
                <input className={styles.form__input} type="date" placeholder="Date de naissance" onChange={(e)=>{
                    setInfos({...infos,birthDate:e.target.value})
                }}/>
                <input className={styles.form__input} type="text" placeholder="Numéro sécu" onChange={(e)=>{
                    setInfos({...infos,nSecu:e.target.value})
                }}/>
                <input className={styles.form__input} type="text" placeholder="Nationalité" onChange={(e)=>{
                    setInfos({...infos,nationality:e.target.value})
                }}/>
                <input className={styles.form__inputFile} type="file" onChange={handleFileChange}/>
                <button type='submit' onClick={getResponse}>Valider</button>
            </div>
        </div>
    )
}
export default NouveauTech