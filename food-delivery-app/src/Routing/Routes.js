import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from '../Component/Pages/Home'
import CartItems from '../Component/Pages/Cart'
import SignIn from '../Component/Pages/SignIn'
import Product from '../Component/Pages/Product'
import AllProducts from '../Component/Pages/AllProducts'


export default class Routing extends React.Component {
    
    render() {
        // const {data}=this.state
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/AllProducts" exact render={(props)=><AllProducts {...props}/>}/>
                    <Route path="/AllProducts/:name" render={(props)=><Product {...props}/>} />
                    <Route path="/Cart" component ={CartItems}/>                  
                    <Route path="/Login" component={SignIn} />
                    <Route render={()=><div>Error: 404 Page Not Found</div>} />
                </Switch>

            </>
        )
    }
}