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
import carou4 from '../../Resource/carousal 4.jpg'
import 'font-awesome/css/font-awesome.min.css';

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
            <>
                <div id="myCarousel" className="carousel slide container-fluid " data-ride="carousel" style={{ marginTop: 75, height: 400, alignItems: "center", backgroundColor: "rgb(141, 0, 0)" }}>
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carou1} className="d-block w-70" alt="..." height="400px" style={{margin:"auto"}}/>
                            <div className="carousel-caption bg-white" style={{ opacity: 0.5, color: "black" }}>
                                <h1>50% off on all order*</h1>
                                <h5>*Offer only on 1st order. Valid till 30th Aug,2020. </h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={carou2} className="d-block w-70" alt="..." height="400px" style={{margin:"auto"}}/>
                            <div className="carousel-caption bg-white" style={{ opacity: 0.5, color: "black" }}>
                                <h1>50% off on all order*</h1>
                                <h5>*Offer only on 1st order. Valid till 30th Aug,2020. </h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={carou3} className="d-block w-80" alt="..." height="400px" style={{margin:"auto"}}/>
                            <div className="carousel-caption bg-white" style={{ opacity: 0.5, color: "black" }}>
                                <h1>50% off on all order*</h1>
                                <h5>*Offer only on 1st order. Valid till 30th Aug,2020. </h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={carou4} className="d-block w-70" alt="..." height="400px" style={{margin:"auto"}}/>
                            <div className="carousel-caption bg-white" style={{ opacity: 0.5, color: "black" }}>
                                <h1>50% off on all order*</h1>
                                <h5>*Offer only on 1st order. Valid till 30th Aug,2020. </h5>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div style={{ position: "fixed", top: 10, width:"240px", zIndex: 10000, left:"50%", marginLeft:"-120px"}}>
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
                <div className="container-fluid row mt-5 d-flex justify-content-center align-items-start " style={{position:"sticky"}}>
                    <div className="col-3 mt-0">
                        <div className="col-12" >Filter</div>
                        <hr></hr>
                        <div className="col-12 " style={{ border: "1px solid lightgrey", backgroundColor: "rgb(246, 246, 246)", padding: "20px 0px", borderRadius: "5px" }}>
                            <div className="col-12">Ratings</div>
                            <div className=" col-12 d-md-flex ">
                                {[4, 3, 2, 1].map(rating => (
                                    <button style={{ borderRadius: 5 }} className="col-sm-12  mb-2 mb-sm-2 flex-fill mx-1 btn btn-danger btn-sm " key={"R" + rating} onClick={() => this.handleFilterRating(rating)}>{rating}</button>
                                ))}
                            </div>
                        </div>
                        <div className="col-12 my-3" style={{ border: "1px solid lightgrey", backgroundColor: "rgb(246, 246, 246)", padding: "20px 0px", borderRadius: "5px" }}>
                            <div className="col-12">Payment</div>
                            <div className="col-12 d-md-flex">
                                {["ALL", "CARD", "CASH"].map(method => (
                                    <button style={{ borderRadius: 5 }} className="col-sm-12 mb-2 mb-sm-2 flex-fill mx-1 btn btn-danger btn-sm" key={method} onClick={() => this.handleNewPayment(method)}>{method}</button>
                                ))}
                            </div>
                        </div>
                        <div className="col-12" style={{ border: "1px solid lightgrey", backgroundColor: "rgb(246, 246, 246)", padding: "20px 0px", borderRadius: "5px" }}>
                            <div className="col-12">Price</div>
                            <div className="col-12 d-md-flex">
                                {["LOW TO HIGH", "HIGH TO LOW"].map(order => (
                                    <button style={{ borderRadius: 5 }} className="col-sm-12 mb-2 mb-sm-2 flex-fill mx-1 btn btn-danger btn-sm" key={order} onClick={() => this.handleNewSort(order)}>{order}</button>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="col-9 row" style={{justifyContent:"center"}}>
                        {data
                            .map(item => (

                                (<div className="card-deck col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-4 "   >
                                        <img src={newfood} className="card-img-top" alt="..." />
                                        <div style={{ fontSize: 20, fontWeight: "bolder", color: "red", position: "absolute", right: 0, backgroundColor: "yellow", width: 60, opacity: 0.9, borderRadius: 3 }}>
                                            <i class="fa fa-star" style={{ fontSize: 18, zIndex: 9, marginRight: 5 }}></i>{item.ratings}
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <div className="card-text" style={{ fontStyle: "italic" }}>{item.category.map(elem => (<small>{elem.menu}, </small>))}</div>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={`${match.url}/${item.name}`}>
                                                <Button color="danger" className={styles.side} >Order Online <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></Button>
                                            </Link>

                                        </div>
                                    </div>

                                </div>)
                            )

                            )
                        }
                    </div>
                </div>
            </>
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
