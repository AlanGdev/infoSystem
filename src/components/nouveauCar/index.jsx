import styles from './nouveauCar.module.scss'
import { useEffect, useState } from 'react'


function NouveauCar(){
    const formData=new FormData()
    const [infos,setInfos]=useState({
        marque:'',
        model:'',
        immatriculation:'',
        initialDate:'',
        finalDate:'',
        affectation:'',
        imageUrl:''
    })
    const [file,setFile]=useState(null)
    const [imgSrc,setImgSrc]=useState(null)

    const getResponse=async()=>{
        const keys=Object.keys(infos)
        keys.map((key)=>formData.append(key,infos[key]))
        formData.append('file',file)
        try{console.log (JSON.stringify(formData))
            const response= await fetch('http://localhost:4000/cars/newcar',{
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
            <h2>Nouveau véhicule </h2>
            <div className={styles.pictureContainer}>
            <img className={styles.picture} src={imgSrc} alt="" /></div>
            <div className={styles.form}>
                <input className={styles.form__input} type="text" placeholder="marque" onChange={(e)=>{
                    setInfos({...infos,marque:e.target.value})
                    }}/>
                <input className={styles.form__input} type="text" placeholder="model" onChange={(e)=>{
                    setInfos({...infos,model:e.target.value})
                }}/>
                <input className={styles.form__input} type="text" placeholder="immatriculation" onChange={(e)=>{
                    setInfos({...infos,immatriculation:e.target.value})
                }}/>
                <input className={styles.form__input} type="Date" placeholder="Date début location" onChange={(e)=>{
                    setInfos({...infos,initialDate:e.target.value})
                }}/>
                <input className={styles.form__input} type="Date" placeholder="Date fin location" onChange={(e)=>{
                    setInfos({...infos,finalDate:e.target.value})
                }}/>
                <input className={styles.form__input} type="text" placeholder="affectation" onChange={(e)=>{
                    setInfos({...infos,affectation:e.target.value})
                }}/>
                <input className={styles.form__inputFile} type="file" onChange={handleFileChange}/>
                <button type='submit' onClick={getResponse}>Valider</button>
            </div>
        </div>
    )
}
export default NouveauCar