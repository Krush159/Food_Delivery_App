import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { search, handleRating, handlePayment, handleSort } from '../../Redux/action'
import styles from './Card.module.css'
import { Button } from 'reactstrap'
import newfood from '../../Resource/newfood.jpg'
import carou1 from '../../Resource/carousal 1.jpg'
import carou2 from '../../Resource/carousel-1.png'
import carou3 from '../../Resource/carousel-2.png'
// import { data } from '../../data'

class AllProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',

        }
    }

    bysearch = (a) => {
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
        const { data, match } = this.props
        console.log(data)
        return (
            <div className="container-fluid">
                <div className='container-fluid bg-dark' style={{ marginTop: 75, height: 400, alignItems: "center" }}>
                    <div className="carousel slide container" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-slide-to="0" className="active"></li>
                            <li data-slide-to="1"></li>
                            <li data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={carou1} className="d-block w-100" alt="..." height="400px" />
                                <div className="carousel-caption d-none d-md-block bg-white" style={{ opacity: 0.5, color: "black" }}>
                                    <h1>50% off on all order*</h1>
                                    <h5>*Offer only on 1st order. Valid till 30th Aug,2020. </h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={carou2} className="d-block w-100" alt="..." height="400px" />
                                <div className="carousel-caption d-none d-md-block  bg-white" style={{ opacity: 0.5, color: "black" }}>
                                    <h1>50% off on all order*</h1>
                                    <h5>*Offer only on 1st order. Valid till 30th Aug,2020. </h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={carou3} className="d-block w-100" alt="..." height="400px" />
                                <div className="carousel-caption d-none d-md-block bg-white" style={{ opacity: 0.5, color: "black" }}>
                                    <h1>50% off on all order*</h1>
                                    <h5>*Offer only on 1st order. Valid till 30th Aug,2020. </h5>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div style={{ marginLeft: 350, position: "fixed", top: 15, width: "700px", zIndex: 10000 }}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.value}
                            placeholder="Search Restaurants in Bangalore"
                            aria-label="Restaurants Name"
                            aria-describedby="button-addon2"
                            onChange={e =>
                                this.setState({
                                    value: e.target.value
                                })}
                        />
                        <div className="input-group-append">
                            <button
                                onClick={() => this.bysearch(this.state.value)}
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                            >Search</button>
                        </div>
                    </div>
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
                                        <Button color="danger" className="mx-1" key={"R"+rating} onClick={() => this.handleFilterRating(rating)}>{rating}</Button>
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
                                                    <div style={{ fontStyle: "italic", fontFamily: "Cambria", fontSize: 20, fontWeight: "bold" }}>{item.category.map(a => a.menu)}</div>
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
