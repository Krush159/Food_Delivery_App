import React from 'react'
import styles from './home.module.css'
import logoHome from '../../Resource/logoFoodly.png'
export default class Home extends React.Component{
    render(){
        return(
            <div className={styles.homePage}>
                <div className={styles.halfBg}>
                  <h1 style={{marginTop:100}}>Giving</h1>
                  <h1> Your</h1>
                  <h1>Hunger</h1>
                  <h1>A</h1>
                  <h1>New</h1>
                  <h1>Option</h1>
                </div>
                <div style={{display:"flex",alignItems:"center", justifyContent:"center",flex:1}}><img src={logoHome} alt="" style={{opacity: 0.5,borderRadius: 10}}/></div>
            </div>
        )
    }
}