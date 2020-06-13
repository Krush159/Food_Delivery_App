import React from 'react'
import {connect} from 'react-redux'
import { search } from '../../Redux/action'
import { Button } from 'reactstrap'

export default class AllProducts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value :''
        }
    }
    render(){
        return(
            <div className="container">
                <div>
                <input 
                    placeholder="Search Restaurant or Cuisine" 
                    style={{ width: 500 }} 
                    value = {this.state.value}
                    onChange ={e => 
                        this.setState({
                            value: e.target.value
                        })
                    }/>
              <Button onClick={()=>search(this.state.value)}>Search</Button>
                </div>
            </div>
        )
    }
}