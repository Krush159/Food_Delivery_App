import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { subtractionQty } from '../../Redux/action'
import styles from './Cart.module.css'
import food from '../../Resource/food 2.jpg'
import emptyCart from '../../Resource/empty-cart.png'
import { Button, Table } from 'reactstrap'
class CartItems extends React.Component {
    handleSubtraction=(minus) => {
        // if(minus0){
            this.props.subtractionQty(minus)
        // }
    }
    // handleRedirect =() => {
    //     return ()
    // }
    render() {
        const { cart } = this.props
        return (
            <>
                <div className="container " style={{ marginTop: 100 }}>
                    {cart.length === 0 ? 
                    (<div>
                        <img src={emptyCart} alt=""/>
                       <div><button className="btn btn-success " onClick={<Redirect to="/AllProducts"/>}>Search Your Nearby Restaurant</button></div>
                    </div>) 
                    : <div className="row">
                        <div className="col-lg-7">

                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Items</th>
                                        <th>Qty</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(orders => (
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-left">
                                                <h4>{orders.menu}</h4>
                                                <h5>{orders.name} ({orders.place})</h5>
                                                <p>Ratings: {orders.rating}</p>
                                                <p>Price: {orders.cost}</p>
                                            </td>
                                            <td>
                                                <div className="d-flex flex-row"><Button onClick={()=>this.handleSubtraction(orders.count)}>-</Button><Button disabled>0</Button><Button>+</Button></div>
                                            </td>
                                            <td>@mdo</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>}


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
    subtractionQty: (payload) => dispatch(subtractionQty(payload)),

})
export default connect(mapStateToProps,mapDispatchToProps)(CartItems)