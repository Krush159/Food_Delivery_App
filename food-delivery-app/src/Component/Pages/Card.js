import React from 'react'

import {connect} from 'react-redux'


class Card extends React.Component {
    render(){
    // let {name,image,category,cost,payment,ratings,reviews,votes}=data
    // console.log(data)
    const {data} = this.props
    console.log(data)
        return (
            <>
                

            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,
})
// const mapDispatchToProps = dispatch => ({
   
// })
export default connect(mapStateToProps)(Card)