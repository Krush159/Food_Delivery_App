import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import CartItems from '../Cart/CartItems'
import Product from './Product'
import {data} from './data'


export default class Routing extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            data : [],
            cart : []
        }
    }
    componentDidMount(){
        this.copyData()
    }
    copyData = () => {
        let tempData = []
        storeProducts.forEach(item =>{
            const eachData = {...item}
            tempData = [...tempData, eachData]
        })
        this.setState(()=>{
            return { data: tempData}
        })
    }
    render() {
        const {data}=this.state
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Cart" component ={CartItems}/>                  
                    <Route path="/Login" component={Login} />
                    <Route render={()=><div>Error: 404 Page Not Found</div>} />
                </Switch>

            </>
        )
    }
}