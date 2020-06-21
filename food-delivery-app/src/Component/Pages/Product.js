import React from 'react'
import { connect } from 'react-redux'
import RestImage from '../../Resource/food 1.jpg'
import styles from './Product.module.css'
import { addToCart } from '../../Redux/action'
import { Button, Table } from 'reactstrap'


class Product extends React.Component {
    componentDidMount() {
        console.log(this.props.match)
    }
    addToMyCart = (item,elem) => {
        this.props.addToCart(item,elem)
        elem.flag = true
    }
    render() {
        let item = this.props.data.find((elem) => elem.name === this.props.match.params.name && elem)
        console.log(item.category)
        return (
            <>
            <div style={{ marginTop: 100 }}>
                <div className={styles.card}>
                    {item && item.category.map((elem,index) => (
                        <div className={styles.main}>
                            <div className={styles.header}>
                                <div className={styles.img}>
                                    <img style={{ borderRadius: 10, height: "100%", width: "100%" }} src={RestImage} alt="mainImage"></img>
                                </div>
                                <div className={styles.middle}>
                                    <div className={styles.details}>
                                        <h4 style={{color:"red"}}>{elem.menu}</h4>
                                        <div style={{ fontStyle: "italic", fontFamily: "Cambria", fontSize: 15, fontWeight: "bold" }}>{elem.menu}</div>
                                        <div><span className="text-muted font-italic">Cost for two</span>: ${item.cost}</div>
                                    </div>
                                    <div className={styles.rate}>
                                        <div style={{ fontSize: 20, fontWeight: "bold", color: "white", backgroundColor: "green", textAlign: "center", borderRadius: 10, width: 50 }}>
                                            {item.ratings}</div>
                                        <div>{item.votes}</div>
                                        <div>{item.reviews}</div>
                                    </div>
                                </div>
                            </div>
                                <Button className={styles.footer} 
                                        onClick={()=>this.addToMyCart(item,elem)} 
                                        disabled={elem.flag?true:false}
                                        color={elem.flag?"secondary":"success"}
                                        >
                                            {elem.flag?("Added to Cart"):("Order Online")}
                                </Button>
                        </div>
                    ))}
                </div>
            </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    data: state.data,
    cart: state.cart
})
const mapDispatchToProps = dispatch => ({
    addToCart: (payload1, payload2) => dispatch(addToCart(payload1,payload2)),
})
export default connect(mapStateToProps,mapDispatchToProps)(Product)