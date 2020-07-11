import React from 'react'
import { Redirect,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { subtractionQty,additionQty } from '../../Redux/action'
import styles from './Cart.module.css'
import food from '../../Resource/food 2.jpg'
import emptyCart from '../../Resource/empty-cart.png'
import { Button, Table } from 'reactstrap'
class CartItems extends React.Component {
    handleSubtraction = (minus) => {
        // if(minus0){
        this.props.subtractionQty(minus)
        // }
    }
    handleAdditionQty = (id) => {
        this.props.additionQty(id)
    }
   
    render() {
        const { cart } = this.props
        let seriel = 1
        return (
            <>
                <div className="container " style={{ height: "100vh", marginTop: 100 }}>
                    {cart.length === 0 ?
                        (<div>
                            <img src={emptyCart} alt="" />
                            <div><Link to="/AllProducts" className="btn btn-success ">Search Your Nearby Restaurant</Link></div>
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
                                                <th scope="row">{seriel++}</th>
                                                <td className="text-left">
                                                    <h4 className="text-danger">{orders.menu}</h4>
                                                    <h5>{orders.name} ({orders.place})</h5>
                                                    <p>Price: {orders.cost}</p>
                                                </td>
                                                <td>
                                                    <div className="d-flex flex-row">
                                                        <Button onClick={() => this.handleSubtraction(orders.id)}>-</Button>
                                                        <div style={{ width: 30, height: 20, padding: 5, fontSize: 20 }}>{orders.count}</div>
                                                        <Button onClick={() => this.handleAdditionQty(orders.id)}>+</Button>
                                                    </div>
                                                </td>
                                                <td>{orders.total}</td>
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
    additionQty: (payload) => dispatch(additionQty(payload)),

})
export default connect(mapStateToProps, mapDispatchToProps)(CartItems)