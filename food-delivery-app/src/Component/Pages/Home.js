import React from 'react'
import styles from './home.module.css'

export default class Home extends React.Component{
    render(){
        return(
            <div className={styles.homePage}>
                <div className={styles.halfBg}>
                  <h1>Hello</h1>
                </div>
            </div>
        )
    }
}