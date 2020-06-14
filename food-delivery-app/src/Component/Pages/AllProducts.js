import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { search, handleRating, handlePayment, handleSort } from '../../Redux/action'
import styles from './Card.module.css'
import { Button } from 'reactstrap'
import newfood from '../../Resource/newfood.jpg'
// import { data } from '../../data'

class AllProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
           
        }
    }
   
    bysearch= (a) => {
       this.props.search(a)
    }
    handleFilterRating = (rating) => {
       
        this.props.handleRating(rating)
    }
    handleNewSort = (order) => {
        this.props.handleSort(order)
    }
    handleNewPayment = (method) => {
        this.props.handlePayment(method)
    }
   
    render() {
        const { data,match } = this.props
        console.log(data)
        return (
            <div className="container-fluid">
                <div style={{ marginTop: 150 }}>
                    <input
                        placeholder="Search Restaurants in Bangalore"
                        style={{ width: 500 }}
                        value={this.state.value}
                        onChange={e =>
                            this.setState({
                                value: e.target.value
                            })
                        } />
                    <Button onClick={() => this.bysearch(this.state.value)}>Search</Button>
                </div>
                <div className="row mt-5">
                    <div className="col-3">
                        <div>
                            <div className="col-12" >Filter</div>
                            <hr></hr>
                            <div className="d-flex justify-content-between my-1">
                                <div>Ratings</div>
                                <div>
                                    {[4, 3, 2, 1].map(rating => (
                                        <Button color="danger" className="mx-1" key={rating} onClick={() => this.handleFilterRating(rating)}>{rating}</Button>
                                    ))}
                                </div>
                            </div>
                            <div className="d-flex justify-content-between ">
                                <div>Payments</div>
                                <div>
                                    {["all", "card", "cash"].map(method => (
                                        <Button color="danger" className="mx-1" key={method} onClick={() => this.handleNewPayment(method)}>{method}</Button>
                                    ))}
                                </div>
                            </div>
                            <div className="d-flex justify-content-between my-1">
                                <div>Price</div>
                                <div>
                                    {["asc", "desc"].map(order => (
                                        <Button color="danger" className="mx-1" key={order} onClick={() => this.handleNewSort(order)}>{order}</Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        {data
                            .map(item => (
                                (<div className={styles.card} className="row">
                                    <div className={styles.main} >
                                        <div className={styles.header} >
                                            <div className={styles.img} className="col-4" >
                                                <img style={{ borderRadius: 10, textAlign: "left" }} src={newfood} alt="mainImage" height="100%"></img>
                                            </div>
                                            <div className={styles.details} className="col-8 row" style={{ borderRadius: 10, textAlign: "left", backgroundColor: "rgb(141, 0, 0)", color: "white", paddingTop: 10 }}>
                                                <div className="col-8">
                                                    <h3>{item.name}</h3>
                                                    <div>{item.place}</div>
                                                    <div style={{ fontStyle: "italic", fontFamily: "Cambria", fontSize: 20, fontWeight: "bold" }}>{item.category}</div>
                                                    <div >
                                                        {item.payment.card && "Card Accepted"}<br />
                                                        {item.payment.cash && "Cash Accepted"}
                                                    </div>
                                                </div>
                                                <div className={styles.rate} className="col-4">
                                                    <div style={{ fontSize: 20, fontWeight: "bold", color: "white", backgroundColor: "green", textAlign: "center", borderRadius: 10, width: 50 }}>
                                                        {item.ratings}</div>
                                                    <div>{item.votes}</div>
                                                    <div>{item.reviews}</div>
                                                    <Link to={`${match.url}/${item.name}`}>
                                                        <Button color="danger" className={styles.side} >Order Online &rArr;</Button>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>)
                            )

                            )
                        }
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = state => ({
    data: state.data,
})
const mapDispatchToProps = dispatch => ({
    search: (payload) => dispatch(search(payload)),
    handleRating: (rating) => dispatch(handleRating(rating)),
    handlePayment: (method) => dispatch(handlePayment(method)),
    handleSort: (order) => dispatch(handleSort(order))
})
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
