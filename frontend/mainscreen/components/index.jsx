import React from 'react'
import styles from '../styles/Main.scss'

const MainScreen = () => {
    return (
        <div className={styles.MainContainer}>
            <div className={styles.LeftContainer}>
                <div className={styles.IconContainer1} >
                    <img className={styles.IconMenu} src="/images/menu.png" alt="" />
                </div>
                <div className={styles.IconContainer2}>
                    <div className={styles.Icon}>F</div>
                    <div className={styles.Icon}>Ig</div>
                    <div className={styles.Icon}>GitH </div>
                    <div className={styles.Icon}>TryHM</div>

                </div>
                <div className={styles.IconContainer3}>
                    <img className={styles.IconDescarga} src="/images/Download.png" alt=""/></div>

            </div>
            <div className={styles.PhotoContainer}>
                <img src="/images/fotoPerfil.jpg" alt="" />
            </div>
            <div className={styles.TextContainer}>
                <div className={styles.About}>
                    <h1>¿Quien soy?</h1>
                    <p> Egresado de la Facultad de Telemática de la Universidad de Colima, Desarrollador y Tecnico en Seguridad Informatica Ofensisva .</p>
                </div>
                <div className={styles.Services}>
                    <div className={styles.Title}>
                        <h3></h3>
                    </div>
                    <div className={styles.SkillCon}>
                        <div className={styles.Skills}>
                            <ul>
                                <h4>Desarrollador</h4>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SASS</li>
                                <li>JS</li>
                                <li>ReactJS</li>
                            </ul>
                        </div>
                        <div className={styles.Skills}>
                            <ul>
                                <h4>Frameworks</h4>
                                <li>VScode</li>
                                <li>GIT</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.SkillCon}>
                        <div className={styles.Skills}>
                            <ul>
                                <h4>CyberSec</h4>
                                <li>Pentesting</li>
                            </ul>
                        </div>
                        <div className={styles.Skills}>
                            <ul>
                                <h4>Idiomas</h4>
                                <li>Ingles</li>
                                <li>Español</li>
                            </ul>

                        </div>

                    </div>
                </div>

            </div>




        </div>


    )
}

export default MainScreen
