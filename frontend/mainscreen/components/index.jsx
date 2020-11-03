import React from 'react'
import styles from '../styles/Main.scss'

const MainScreen = () => {
    return (
        <div className={styles.MainContainer}>
            <div className={styles.LeftContainer}>
            <div className={styles.PhotoContainer}>
                <img src="/images/fotoPerfil.jpg" alt=""/>
            </div>  
            <div className={styles.TextContainer}>
            hola
            </div>
            </div>
            
            

        </div>

        
    )
}

export default MainScreen
