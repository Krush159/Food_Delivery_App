import React from 'react'
import { connect } from 'react-redux'
import RestImage from '../../Resource/food 1.jpg'
import styles from './Product.module.css'

class Product extends React.Component {
    componentDidMount() {
        console.log(this.props.match)
    }

    render() {
        let item = this.props.data.find(elem => elem.name === this.props.match.params.name && elem)
        console.log(item.category)
        return (
            <div style={{ marginTop: 100 }}>
                {item && item.category.map(elem => (
                    <div className={styles.card}>
                        <div className={styles.main}>
                            <div className={styles.header}>
                                <div className={styles.img}>
                                    <img style={{ borderRadius: 10, height: "100%", width: "100%" }} src={RestImage} alt="mainImage"></img>
                                </div>
                                <div className={styles.middle}>
                                    <div className={styles.details}>
                                        <h3>{elem}</h3>
                                        <div style={{ fontStyle: "italic", fontFamily: "Cambria", fontSize: 15, fontWeight: "bold" }}>{elem}</div>
                                        <div><span className="text-muted font-italic">Cost for two</span>: ${item.cost}</div>
                                        <div >
                                            {item.payment.card && "Card Accepted  "}
                                            {item.payment.cash && "Cash Accepted"}
                                        </div>
                                    </div>
                                    <div className={styles.rate}>
                                        <div style={{ fontSize: 20, fontWeight: "bold", color: "white", backgroundColor: "green", textAlign: "center", borderRadius: 10, width: 50 }}>
                                            {item.ratings}</div>
                                        <div>{item.votes}</div>
                                        <div>{item.reviews}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footer}>
                                <div className={styles.side}>Order Online &rArr;</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.data,
})
// const mapDispatchToProps = dispatch => ({
//     search: (payload) => dispatch(search(payload)),
//     handleRating: (rating) => dispatch(handleRating(rating)),
//     handlePayment: (method) => dispatch(handlePayment(method)),
//     handleSort: (order) => dispatch(handleSort(order))
// })
export default connect(mapStateToProps)(Product)