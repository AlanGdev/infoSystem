import styles from './nouveauTech.module.scss'
function NouveauTech(){
    const configTech=['nom','prenom']
    console.log(configTech)

    return(
        <div> 
            <h2>Nouveau tech </h2>
            <div className={styles.form}>
                <input type="text" placeholder="nom" />
                <input type="text" placeholder="prenom"/>
                <button>Valider</button>
            </div>
        </div>
    )
}
export default NouveauTech