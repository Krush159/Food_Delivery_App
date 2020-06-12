import React from 'react'
import styles from './Card.module.css'



function Card({data}) {

    let {name,image,category,cost,payment,ratings,reviews,votes}=data

        return (
            <>
                <div className={styles.card}>
                            <div  className={styles.main}>
                                <div className={styles.header}>
                                    <div className={styles.img}>
                                        <img style={{borderRadius:10}} src={image} alt="mainImage"></img>
                                    </div>
                                    <div className={styles.details}>
                                        <h1>{name}</h1>
                                        <div style={{fontStyle:"italic",fontFamily:"Cambria", fontSize:20, fontWeight:"bold"}}>{category}</div>
                                        <div>${cost}</div>
                                        <div >
                                            {payment.card && "Card Accepted"}<br/>
                                            {payment.cash && "Cash Accepted"}
                                        </div>
                                    </div>
                                    <div className={styles.rate}>
                                        <div style={{fontSize:20,fontWeight:"bold",color:"white",backgroundColor:"green",textAlign:"center",borderRadius:10, width:50}}>
                                            {ratings}</div>
                                        <div>{votes}</div>
                                        <div>{reviews}</div>
                                    </div>
                                </div>
                                <div className={styles.footer}>
                                    <div className={styles.gap}></div>
                                    <div className={styles.side}>Order Online &rArr;</div>
                                </div>
                            </div>
                      
                </div>

            </>
        )
    }
export default Card