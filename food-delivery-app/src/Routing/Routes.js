import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from '../Component/Pages/Home'
// import {data} from './data'
import CartItems from '../Component/Pages/Cart'
import SignIn from '../Component/Pages/SignIn'
import AllProducts from '../Component/Pages/AllProducts'


export default class Routing extends React.Component {
    constructor(props){
        super(props)
        // this.state ={
        //     data : [],
        //     cart : []
        // }
    }
    // componentDidMount(){
    //     this.copyData()
    // }
    // copyData = () => {
    //     let tempData = []
    //     storeProducts.forEach(item =>{
    //         const eachData = {...item}
    //         tempData = [...tempData, eachData]
    //     })
    //     this.setState(()=>{
    //         return { data: tempData}
    //     })
    // }
    render() {
        // const {data}=this.state
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/AllProducts" component ={AllProducts}/>
                    <Route path="/Cart" component ={CartItems}/>                  
                    <Route path="/Login" component={SignIn} />
                    <Route render={()=><div>Error: 404 Page Not Found</div>} />
                </Switch>

            </>
        )
    }
}