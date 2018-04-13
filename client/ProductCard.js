import React, { Component } from 'react'

class ProductCard extends Component{

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }

  render(){
    console.log("This is message from Product Card", this)
    return(
      <div>
         <h1> Product Name = {this.props.myProduct.productName} </h1>
         <h1> Product Price = {this.props.myProduct.productPrice} </h1>
         <h1> Product Id = {this.props.myProduct.productId} </h1>
         <br/>
       </div>
    )
  }
}

module.exports = ProductCard
